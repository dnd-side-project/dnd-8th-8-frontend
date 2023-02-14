import { createGlobalStyle } from 'styled-components'
import reset from './reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    line-height: 1.3;
    letter-spacing: -0.02rem;
  }
`

export default GlobalStyle
