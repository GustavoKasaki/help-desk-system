import styled from 'styled-components'

export const Form = styled.form`
  h2 {
    margin-bottom: 16px;
  }

  width: 50%;
`

export const FormInput = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  label {
    width: auto;
    text-wrap: nowrap;
  }

  input {
    padding: 0 8px;
    margin-left: 8px;
    height: 32px;
    width: 100%;
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
