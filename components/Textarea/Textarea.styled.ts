import { theme } from '@/styles'
import styled from 'styled-components'

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 1.5rem;
  color: ${theme.color.neutral800};
  border-color: ${theme.color.neutral300};
  border-radius: 0.4rem;
  outline: none;

  ::placeholder {
    color: ${theme.color.neutral300};
  }
`
