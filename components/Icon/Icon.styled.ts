import styled from 'styled-components'

import type { StyledSvgProps } from './'

export const Svg = styled.svg<StyledSvgProps>`
  color: ${({ color = 'primary500', theme }) => theme.color[color]};
`
