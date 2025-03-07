'use client'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'

import { UserType } from '@/utils/enums'
import { addUser, fetchUsers } from '@/redux/reducers/userSlice'

import * as S from './styles'

const UserForm = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [id, setId] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [password, setPassword] = useState('')
  const [type, setType] = useState('')

  const handleNewUser = async () => {
    const newUser = {
      id: id,
      displayName: displayName,
      password: password,
      type: type
    }

    await dispatch(addUser(newUser))
    await dispatch(fetchUsers())
  }

  return (
    <S.Form id="userForm" onSubmit={handleNewUser}>
      <h2>Create new user</h2>
      <S.FormInput>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          value={id}
          name="username"
          maxLength={100}
          onChange={(e) => setId(e.target.value)}
          required
        />
      </S.FormInput>
      <S.FormInput>
        <label htmlFor="displayName">Display Name: </label>
        <input
          name="displayName"
          value={displayName}
          maxLength={100}
          onChange={(e) => setDisplayName(e.target.value)}
          required
        />
      </S.FormInput>
      <S.FormInput>
        <label htmlFor="password">Password: </label>
        <input
          name="password"
          value={password}
          maxLength={20}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </S.FormInput>
      <S.EditStatus>
        <p>User type:</p>
        <select required value={type} onChange={(e) => setType(e.target.value)}>
          <option selected></option>
          {Object.values(UserType).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </S.EditStatus>
    </S.Form>
  )
}

export default UserForm
