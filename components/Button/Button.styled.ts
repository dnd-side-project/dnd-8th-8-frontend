import styled from 'styled-components'
import { ButtonProps } from './Button'

type LayoutProps = Pick<
  ButtonProps,
  'fullWidth' | 'color' | 'backgroundColor' | 'shadow' | 'disabled'
>

export const Layout = styled.button<LayoutProps>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  padding: 15px 30px;
  color: ${({ color = 'neutral0', disabled, theme }) =>
    disabled ? theme.color.neutral500 : theme.color[color]};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ backgroundColor = 'secondary500', disabled, theme }) =>
    disabled
      ? theme.color.neutral100
      : backgroundColor === '#F6DB4F'
      ? '#F6DB4F'
      : theme.color[backgroundColor]};
  border: none;
  border-radius: 10px;
  box-shadow: ${({ shadow }) =>
    shadow ? '6px 4px 18px 3px rgba(0, 0, 0, 0.11)' : 'none'};
`
