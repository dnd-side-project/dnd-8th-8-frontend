import { FOOTER_HEIGHT } from '@/constant'
import styled from 'styled-components'

export const Layout = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 36rem;
  height: ${FOOTER_HEIGHT};
  padding: 0;
  box-shadow: 6rem 4rem 18rem 3rem rgb(0 0 0 / 11%);

  a {
    width: 100%;
    text-decoration: none;
  }
`

export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
`
