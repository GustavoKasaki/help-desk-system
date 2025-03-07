import { styled } from 'styled-components'

import { TicketStatus } from '@/utils/enums'
import { Colors } from '@/styles/globals'

const statusColors: Record<TicketStatus, string> = {
  [TicketStatus.OPEN]: 'red',
  [TicketStatus.PENDING]: 'orange',
  [TicketStatus.CLOSED]: 'green'
}

export const Card = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  margin-bottom: 24px;
  padding: 12px;
  background-color: #ccc;
  border: 1px solid #000;
  border-radius: 5px;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.5);
`

export const CardHeader = styled.div`
  display: flex;
  padding-bottom: 8px;
  border-bottom: 1px solid #000;

  .data {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .data-edit {
    width: 100%;

    .title-edit {
      display: flex;
      align-items: center;
      margin-bottom: 12px;

      input {
        padding: 0 8px;
        margin-left: 8px;
        height: 32px;
        width: 100%;
      }
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-left: 32px;
  }
`

export const EditStatus = styled.div`
  display: flex;
  align-items: center;

  select {
    margin
    padding: 0 8px;
    margin-left: 8px;
    height: 32px;
  }
`

export const StatusText = styled.p<{ status: TicketStatus }>`
  padding: 4px;
  background-color: ${Colors.fadedWhiteActive};
  border: 1px solid black;
  font-weight: bold;
  color: ${({ status }) => statusColors[status] || 'black'};
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 90%;

  span {
    font-weight: bold;
  }

  .description {
    padding: 12px 0;
  }

  textarea {
    padding: 8px;
    margin-top: 8px;
    height: 100px;
    resize: none;
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`
