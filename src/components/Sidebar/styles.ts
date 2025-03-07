import styled from 'styled-components'

import { ButtonContainer } from '../Button/styles'

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  max-width: 320px;
  text-align: center;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background-color: #ccc;
  border-right: 2px solid #000;

  form {
    position: absolute:
    bottom: 0;
  }
`

export const Greetings = styled.div`
  padding: 24px 0;
  border-bottom: 2px solid #000;

  img {
    cursor: pointer;
  }

  p {
    margin-top: 12px;
  }
`

export const MenuList = styled.ul`
  padding: 24px 0;

  ${ButtonContainer} {
    margin-bottom: 24px;
  }
`

export const Item = styled.li`
  margin: 12px 0;
`
