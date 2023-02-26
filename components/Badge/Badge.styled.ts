import styled from 'styled-components'
import { BadgeProps } from './'

export const Layout = styled.span<BadgeProps>`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 0.3rem 1.2rem;
  background-color: ${({ theme, backgroundColor }) =>
    theme.color[backgroundColor]};
  border-radius: 12px;
`
