import styled from 'styled-components'

export const Layout = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 60px;
  padding: 0;
  box-shadow: 6px 4px 18px 3px rgb(0 0 0 / 11%);

  a {
    width: 100%;
    text-decoration: none;
  }
`

export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
`
