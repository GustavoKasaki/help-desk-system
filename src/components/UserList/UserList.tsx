'use client'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'

import { fetchUsers } from '@/redux/reducers/userSlice'

import { Table } from './styles'

const UserList = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { users, isLoading, error } = useSelector(
    (state: RootState) => state.users
  )

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <>
      {error && <p>Error: {error}</p>}
      {isLoading && <p>Loading...</p>}
      {users.length == 0 ? (
        <h2>No users registered</h2>
      ) : (
        <Table>
          <thead>
            <tr>
              <th className="id">Username</th>
              <th className="displayName">Display Name</th>
              <th className="type">User Type</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ id, displayName, type }) => (
              <tr key={id}>
                <td className="id">{id}</td>
                <td className="displayName">{displayName}</td>
                <td className="type">{type}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default UserList
