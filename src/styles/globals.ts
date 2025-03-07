'use client'
import { createGlobalStyle } from 'styled-components'

export const Colors = {
  fadedBlack: 'rgba(0, 0, 0, 0.3)',
  fadedWhite: 'rgba(255, 255, 255, 0.0)',
  fadedWhiteActive: 'rgba(255, 255, 255, 0.6)',
  activeRed: 'rgba(255, 0, 0, 0.75)'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    height: 100vh;
  }

  header {
    margin-left: 320px;
  }

  main {
    margin-left: 320px;
    height: 100vh;
  }
`
