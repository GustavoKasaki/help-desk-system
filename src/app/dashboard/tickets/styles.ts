import styled from 'styled-components'

export const Header = styled.header`
  position: sticky;
  top: 0;
  height: 80px;
  background-color: #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000;
  padding: 0 24px;
`

export const Buttons = styled.div`
  button {
    margin-left: 12px;
  }
`

export const PageContent = styled.main`
  padding: 24px;
  height: auto;
`
