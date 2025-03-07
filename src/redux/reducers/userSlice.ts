import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { db, collection, getDocs } from '@/lib/firebase'
import { doc, setDoc, updateDoc } from 'firebase/firestore'

interface User {
  id: string
  displayName: string
  password: string
  type: string
}

interface UserState {
  users: User[]
  isCreating: boolean
  isLoading: boolean
  error: string | null
}

const initialState: UserState = {
  users: [],
  isCreating: false,
  isLoading: false,
  error: null
}

// Fetch users Thunk
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    console.log('Fetching users in Firestore...')
    const querySnapshot = await getDocs(collection(db, 'users'))

    const users = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    })) as User[]

    console.log('Users found:', users)
    return users
  } catch (error) {
    console.error('Error fetching users:', error)
    throw error
  }
})

// Create new user Thunk
export const addUser = createAsyncThunk(
  'users/addUser',
  async (newUser: User) => {
    try {
      // Create user object
      const finalUser: User = {
        ...newUser
      }

      // Save to Firestore using `setDoc`
      await setDoc(doc(db, 'users', newUser.id), finalUser)

      return finalUser
    } catch (error) {
      console.error('Error creating new user:', error)
      throw error
    }
  }
)

// Edit user Thunk
export const updateUser = createAsyncThunk(
  'users/updateUser',
  async ({ id, updates }: { id: string; updates: Partial<User> }) => {
    const usuarioRef = doc(db, 'users', id)
    await updateDoc(usuarioRef, updates)
    return { id, updates }
  }
)

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    toggleCreate(state) {
      state.isCreating = !state.isCreating
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.isLoading = false
        state.users = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message ?? 'Error loading users'
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload)
      })
      .addCase(
        updateUser.fulfilled,
        (
          state,
          action: PayloadAction<{ id: string; updates: Partial<User> }>
        ) => {
          const { id, updates } = action.payload
          const index = state.users.findIndex((c) => c.id === id)

          if (index !== -1) {
            state.users[index] = {
              ...state.users[index],
              ...updates
            }
          }
        }
      )
  }
})

export const { toggleCreate } = userSlice.actions
export default userSlice.reducer
