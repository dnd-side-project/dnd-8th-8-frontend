import { theme } from '@/styles'
import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid ${theme.color.neutral300};

  a {
    text-decoration: none;
  }
`

export const TabLayout = styled.div<{ active: boolean }>`
  width: 100%;
`

export const TabLabelSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const Border = styled.div`
  position: absolute;
  bottom: 0;
  width: 3.6rem;
  height: 0.2rem;
  background: ${({ theme }) => theme.color.secondary800};
  border-radius: 0.2rem 0.2rem 0 0;
`
