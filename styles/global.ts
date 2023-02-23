import { createGlobalStyle } from 'styled-components'
import reset from './reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Pretendard, sans-serif;
    line-height: 1.3;
  }
`

export default GlobalStyle
