import styled from 'styled-components'
import { BadgeProps } from './'

export const Layout = styled.span<BadgeProps>`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 3px 10px;
  background-color: ${({ theme, backgroundColor }) =>
    theme.color[backgroundColor]};
  border-radius: 12px;
`
