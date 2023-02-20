import styled from 'styled-components'

export const Layout = styled.footer`
  position: fixed;
  bottom: 0;
  height: 60px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  padding: 0;
  box-shadow: 6px 4px 18px 3px rgba(0, 0, 0, 0.11);

  a {
    text-decoration: none;
    width: 100%;
  }
`

export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`
