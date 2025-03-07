import styled from 'styled-components'

export const FormTitle = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  input {
    padding: 0 8px;
    margin-left: 8px;
    height: 32px;
    width: 100%;
  }
`

export const FormDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  textarea {
    padding: 8px;
    margin-top: 6px;
    height: 100px;
    resize: none;
  }
`
