import styled from 'styled-components'

export const Layout = styled.div`
  position: relative;
`

export const MenuLayout = styled.div`
  position: absolute;
  top: 0;
  left: calc(-10rem + 1rem);
  width: 10rem;
  background-color: ${({ theme }) => theme.color.neutral0};
  border: 1px solid ${({ theme }) => theme.color.secondary100};
  border-radius: 6px;
  box-shadow: 6px 4px 18px 3px rgb(0 0 0 / 11%);
`

export const MenuItem = styled.button`
  width: 100%;
  padding: 1rem 0;
  text-align: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
`

export const Divider = styled.div`
  height: 0.1rem;
  background-color: ${({ theme }) => theme.color.secondary100};
`
