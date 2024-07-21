import { createGlobalStyle } from 'styled-components'
import darkPokeball from '../assets/dark-pokeball.png'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F5F5F6;
    --text-dark: #303943;
    --text-white: #FFFFFF;
    --button-dark: #AAB3C7;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    overflow-x: hidden;
    @media (max-width: 1024px) {
      font-size: 93.75%; //15 px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }
  
  body {
    height: 95vh;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased; 

    background-color: var(--background);
    
    background-image: url(${darkPokeball});
    background-position: right top;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  button {
    cursor: pointer;
  }
`