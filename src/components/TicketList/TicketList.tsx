'use client'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'

import TicketCard from '../TicketCard/TicketCard'

import * as S from './styles'
import { fetchTickets } from '@/redux/reducers/ticketSlice'

const TicketList = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { tickets, error, isLoading } = useSelector(
    (state: RootState) => state.tickets
  )

  useEffect(() => {
    dispatch(fetchTickets())
  }, [dispatch])

  return (
    <S.List>
      {tickets.length === 0 ? (
        <h3>There are no tickets!</h3>
      ) : (
        <>
          {isLoading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {tickets.map(
            ({ id, title, description, user, ticketDate, status }) => (
              <TicketCard
                key={id}
                id={id}
                title={title}
                description={description}
                user={user}
                ticketDate={ticketDate}
                status={status}
              />
            )
          )}
        </>
      )}
    </S.List>
  )
}

export default TicketList
