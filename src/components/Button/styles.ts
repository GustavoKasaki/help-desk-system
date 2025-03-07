import styled from 'styled-components'

import { Colors } from '@/styles/globals'
import { Props } from './Button'

export const ButtonContainer = styled.button<Props>`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  height: 46px;
  color: #333;
  width: ${({ width }) => (width ? width : '100%')};
  background: #fff;
  border-radius: 40px;
  box-shadow: 0 0 10px ${Colors.fadedBlack};
  cursor: pointer;
  transition: 0.5s ease;

  ${({ iconOnly }) =>
    iconOnly
      ? `
      width: 46px;
    `
      : `
    position: relative;
  
    p {
      max-width: 50%;
      margin: 0 auto;
    }
  
    svg {
      position: absolute;
      top: 14px;
      right: 16px;
    }
    `}

  &:hover {
    background-color: ${Colors.fadedWhiteActive};
  }

  &.isActive {
    color: #fff;
    background-color: rgba(255, 0, 0, 0.75);
    box-shadow: inset 1px 1px 5px 0px rgba(0, 0, 0, 0.5);
  }
`
