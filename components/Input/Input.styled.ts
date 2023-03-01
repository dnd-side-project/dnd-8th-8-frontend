import { theme } from '@/styles'
import styled from 'styled-components'

export const Layout = styled.div`
  svg {
    margin-right: 1rem;
  }

  display: flex;
  width: 100%;
  padding: ${(props: { borderStyle: boolean }) => props.borderStyle && '1rem'};
  border: ${(props: { borderStyle: boolean }) =>
    props.borderStyle && `1px solid ${theme.color.neutral300}`};
  border-radius: ${(props: { borderStyle: boolean }) =>
    props.borderStyle && `6rem`};
`

export const StyledInput = styled.input`
  ::placeholder {
    color: #aeaeae;
  }

  width: 100%;
  border: none;
  outline: none;
`
