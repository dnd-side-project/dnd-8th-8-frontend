import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: rgb(0 0 0 / 50%);
`

export const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: calc(100% - 6rem);
  padding: 1.8rem;
  background-color: ${({ theme }) => theme.color.neutral0};
  border-radius: 1.6rem;
  transform: translate(-50%, -50%);
`
