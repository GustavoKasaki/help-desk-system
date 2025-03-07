'use client'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { FaRegPenToSquare } from 'react-icons/fa6'
import { IoArrowBack } from 'react-icons/io5'
import { FaRegSave } from 'react-icons/fa'

import Button from '../Button/Button'
import { TicketStatus } from '@/utils/enums'
import { updateTicket } from '@/redux/reducers/ticketSlice'

import * as S from './styles'

type Props = {
  id: string
  title: string
  description: string
  user: string
  ticketDate: string
  status: TicketStatus
}

const ChamadoCard = ({
  id,
  title,
  description,
  user,
  ticketDate,
  status
}: Props) => {
  const dispatch = useDispatch<AppDispatch>()
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [formData, setFormData] = useState({
    title: title,
    description: description,
    status: status
  })

  const handleEdit = () => {
    setIsEditing(true)
    setFormData({
      title: title,
      description: description,
      status: status
    })
  }

  const handleSave = async () => {
    if (isEditing) {
      await dispatch(
        updateTicket({
          id,
          updates: {
            title: formData.title,
            description: formData.description,
            status: formData.status
          }
        })
      )
      setIsEditing(false)
    }
  }

  return (
    <>
      {isEditing ? (
        <S.Card>
          <S.CardContent>
            <S.CardHeader>
              <div className="data-edit">
                <p className="title-edit">
                  <span>Title: </span>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                  />
                </p>
                <S.EditStatus>
                  <p>Status:</p>
                  <select
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        status: e.target.value as TicketStatus
                      })
                    }
                  >
                    {Object.values(TicketStatus).map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </S.EditStatus>
              </div>
            </S.CardHeader>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </S.CardContent>
          <S.Buttons>
            <Button
              icon={IoArrowBack}
              iconOnly={true}
              onClick={() => setIsEditing(false)}
            />
            <Button icon={FaRegSave} iconOnly={true} onClick={handleSave} />
          </S.Buttons>
        </S.Card>
      ) : (
        <S.Card>
          <S.CardContent>
            <S.CardHeader>
              <div className="data">
                <h3>{id}</h3>
                <S.StatusText status={status}>{status}</S.StatusText>
              </div>
              <div className="info">
                <p className="title">
                  <span>Title: </span>
                  {title}
                </p>
                <p className="date">
                  Opened by: <span>{user}</span> in <span>{ticketDate}</span>
                </p>
              </div>
            </S.CardHeader>
            <pre className="description">{description}</pre>
          </S.CardContent>
          <Button
            icon={FaRegPenToSquare}
            iconOnly={true}
            onClick={handleEdit}
          />
        </S.Card>
      )}
    </>
  )
}

export default ChamadoCard
