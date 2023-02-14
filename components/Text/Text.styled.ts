import styled from 'styled-components'
import { TextProps } from './Text'

export const Layout = styled.span<TextProps>`
  font-size: ${({ theme, as }) => theme.fontSize[as]}px;
  font-weight: ${({ theme, as }) => theme.fontWeight[as]};
  line-height: ${({ theme, as }) => theme.lineHeight[as]}px;
  color: ${({ theme, color = 'neutral900' }) => theme.color[color]};
`
