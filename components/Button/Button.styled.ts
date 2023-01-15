import styled from 'styled-components'

export const Layout = styled.button`
  box-sizing: border-box;
  display: block;
  height: 40px;
  padding: 0 20px;
  color: ${({ theme }) => theme.color.trueWhite};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.color.gray3 : theme.color.indigo};
  border: 0;
  border-radius: 4px;
  outline: none;

  &:active,
  &:focus,
  &:hover {
    background-color: ${({ disabled, theme }) =>
      disabled ? theme.color.gray3 : theme.color.magenta};
  }
`
