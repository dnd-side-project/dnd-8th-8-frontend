import styled, { Color } from 'styled-components'

interface LayoutProps {
  size?: number
  color?: keyof Color
}

export const Layout = styled.svg<LayoutProps>`
  width: ${({ size = 24 }) => size}px;
  height: ${({ size = 24 }) => size}px;
  fill: ${({ color = 'neutral900', theme }) => theme.color[color]};
`
