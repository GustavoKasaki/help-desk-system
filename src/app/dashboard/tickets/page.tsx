'use client'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { IoArrowBack } from 'react-icons/io5'
import { FaRegSave } from 'react-icons/fa'

import { toggleCreate } from '@/redux/reducers/ticketSlice'
import Button from '@/components/Button/Button'

import TicketForm from '@/components/TicketForm/TicketForm'
import TicketList from '@/components/TicketList/TicketList'

import * as S from './styles'

const Tickets = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { isCreating } = useSelector((state: RootState) => state.tickets)

  return (
    <>
      <S.Header>
        <h1>IT Tickets</h1>
        {isCreating ? (
          <S.Buttons>
            <Button
              icon={IoArrowBack}
              iconOnly={true}
              width="150px"
              onClick={() => dispatch(toggleCreate())}
            />
            <Button
              icon={FaRegSave}
              iconOnly={true}
              width="150px"
              type="submit"
              form="ticketForm"
            />
          </S.Buttons>
        ) : (
          <Button
            titulo={'Novo'}
            width="100px"
            onClick={() => dispatch(toggleCreate())}
          />
        )}
      </S.Header>
      <S.PageContent>
        {isCreating ? <TicketForm /> : <TicketList />}
      </S.PageContent>
    </>
  )
}

export default Tickets
