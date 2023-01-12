import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard Variable';
    font-style: normal;
    font-weight: 45 920;
    src: local('Pretendard Variable'), url('/fonts/PretendardVariable.woff2') format('woff2-variations');
    font-display: swap;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Pretendard Variable', sans-serif;
    line-height: 1.3;
    letter-spacing: -0.02rem;
  }
`

export default GlobalStyle
