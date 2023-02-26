import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;

  a {
    text-decoration: none;
  }

  margin-bottom: 4rem;
`

export const TabLayout = styled.div<{ active: boolean }>`
  width: 100%;
`

export const TabLabelSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  margin-top: 1.6rem;
  text-align: center;
`

export const Border = styled.div`
  width: 3.6rem;
  height: 0.2rem;
  background: ${({ theme }) => theme.color.secondary800};
  border-radius: 0.2rem 0.2rem 0 0;
`
