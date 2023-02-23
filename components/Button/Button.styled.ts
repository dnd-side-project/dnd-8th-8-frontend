import styled, { css } from 'styled-components'
import { ButtonProps } from './Button'

type LayoutProps = Pick<
  ButtonProps,
  | 'fullWidth'
  | 'backgroundColor'
  | 'shadow'
  | 'disabled'
  | 'border'
  | 'borderColor'
  | 'borderRadius'
  | 'active'
  | 'width'
  | 'height'
>

export const Layout = styled.button<LayoutProps>`
  width: ${({ fullWidth, width = 'auto' }) => (fullWidth ? '100%' : width)};
  height: ${({ height = 'auto' }) => height};
  padding: 15px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ backgroundColor = 'secondary500', disabled, theme }) =>
    disabled
      ? theme.color.neutral100
      : backgroundColor === '#F6DB4F'
      ? '#F6DB4F'
      : theme.color[backgroundColor]};
  border: ${({ border, borderColor = 'secondary300', theme }) =>
    border ? `1px solid ${theme.color[borderColor]}` : 'none'};
  border-radius: ${({ borderRadius = '16px' }) => borderRadius};
  box-shadow: ${({ shadow }) =>
    shadow ? '6px 4px 18px 3px rgba(0, 0, 0, 0.11)' : 'none'};
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ active }) => active && buttonActive}
`
const buttonActive = css`
  background-color: ${({ theme }) => theme.color.secondary500};
`
