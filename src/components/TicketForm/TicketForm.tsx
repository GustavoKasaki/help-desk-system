'use client'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'

import { addTicket, fetchTickets } from '@/redux/reducers/ticketSlice'
import { getDisplayName } from '@/utils/actions'

import * as S from './styles'

const TicketForm = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [user, setUser] = useState('')

  useEffect(() => {
    const displayName = async () => {
      const name = await getDisplayName()
      setUser(name)
    }
    displayName()
  }, [])

  const handleNewTicket = async () => {
    const newTicket = {
      title: title,
      description: description,
      user: user
    }

    await dispatch(addTicket(newTicket))
    dispatch(fetchTickets())
  }

  return (
    <form id="ticketForm" onSubmit={handleNewTicket}>
      <h2>New Ticket</h2>
      <S.FormTitle>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          value={title}
          name="title"
          maxLength={60}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </S.FormTitle>
      <S.FormDescription>
        <label htmlFor="description">Description: </label>
        <textarea
          name="description"
          value={description}
          maxLength={400}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </S.FormDescription>
    </form>
  )
}

export default TicketForm
