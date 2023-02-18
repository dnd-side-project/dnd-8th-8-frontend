import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  gap: 11px;
`

export const Label = styled.label`
  display: block;
`

export const LabelLayout = styled.div``

export const IconWrapper = styled.div``

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
`
