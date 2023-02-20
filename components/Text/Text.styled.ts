import styled from 'styled-components'
import { TextProps } from './Text'

export const Layout = styled.span<TextProps>`
  font-size: ${({ theme, as = 't3' }) => theme.fontSize[as]}px;
  font-weight: ${({ theme, as = 't3' }) => theme.fontWeight[as]};
  line-height: ${({ theme, as = 't3' }) => theme.lineHeight[as]}px;
  color: ${({ theme, color = 'neutral900' }) => theme.color[color]};
  white-space: pre-wrap;
`
