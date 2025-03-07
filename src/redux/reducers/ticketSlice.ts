import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { db, collection, getDocs } from '@/lib/firebase'
import { doc, setDoc, updateDoc } from 'firebase/firestore'

import { TicketStatus } from '@/utils/enums'

interface Ticket {
  id: string
  title: string
  description: string
  user: string
  ticketDate: string
  status: TicketStatus
}

interface TicketState {
  tickets: Ticket[]
  isCreating: boolean
  isLoading: boolean
  error: string | null
}

const initialState: TicketState = {
  tickets: [],
  isCreating: false,
  isLoading: false,
  error: null
}

// Firebase tickets fetch Thunk
export const fetchTickets = createAsyncThunk(
  'tickets/fetchTickets',
  async () => {
    try {
      console.log('Fetching tickets from Firestore...')
      const querySnapshot = await getDocs(collection(db, 'tickets'))

      const tickets = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })) as Ticket[]

      console.log('Tickets found:', tickets)
      return tickets
    } catch (error) {
      console.error('Error fetching tickets:', error)
      throw error
    }
  }
)

// Create new ticket Thunk
export const addTicket = createAsyncThunk(
  'tickets/addTicket',
  async (
    newTicket: Omit<Ticket, 'id' | 'ticketDate' | 'status'>,
    { getState }
  ) => {
    try {
      const state = getState() as { tickets: TicketState }
      const existingTickets = state.tickets.tickets

      // Generate sequential ID TK0001, TK0002, etc.
      const previousTicket = existingTickets[existingTickets.length - 1]
      const lastId = previousTicket ? previousTicket.id : 'TK0000'
      const count = parseInt(lastId.replace('TK', ''), 10) + 1
      const newId = `TK${String(count).padStart(4, '0')}`

      // Create full ticket object
      const finalTicket: Ticket = {
        id: newId,
        ticketDate: new Date().toLocaleString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        status: TicketStatus.OPEN,
        ...newTicket
      }

      // Save to Firestore using 'setDoc'
      await setDoc(doc(db, 'tickets', newId), finalTicket)

      return finalTicket
    } catch (error) {
      console.error('Error creating new ticket:', error)
      throw error
    }
  }
)

// Editing ticket Thunk
export const updateTicket = createAsyncThunk(
  'tickets/updateTicket',
  async ({ id, updates }: { id: string; updates: Partial<Ticket> }) => {
    const ticketRef = doc(db, 'tickets', id)
    await updateDoc(ticketRef, updates)
    return { id, updates }
  }
)

const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    toggleCreate(state) {
      state.isCreating = !state.isCreating
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        fetchTickets.fulfilled,
        (state, action: PayloadAction<Ticket[]>) => {
          state.isLoading = false
          state.tickets = action.payload
        }
      )
      .addCase(fetchTickets.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message ?? 'Error loading tickets'
      })
      .addCase(addTicket.fulfilled, (state, action) => {
        state.tickets.push(action.payload)
      })
      .addCase(
        updateTicket.fulfilled,
        (
          state,
          action: PayloadAction<{ id: string; updates: Partial<Ticket> }>
        ) => {
          const { id, updates } = action.payload
          const index = state.tickets.findIndex((c) => c.id === id)

          if (index !== -1) {
            state.tickets[index] = {
              ...state.tickets[index],
              ...updates
            }
          }
        }
      )
  }
})

export const { toggleCreate } = ticketSlice.actions
export default ticketSlice.reducer
