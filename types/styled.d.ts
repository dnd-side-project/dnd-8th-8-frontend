import 'styled-components'

declare module 'styled-components' {
  export interface Color {
    neutral0: string
    neutral100: string
    neutral300: string
    neutral400: string
    neutral500: string
    neutral800: string
    neutral900: string
    primary0: string
    primary500: string
    primary900: string
    secondary0: string
    secondary100: string
    secondary300: string
    secondary400: string
    secondary500: string
    secondary800: string
    secondary900: string
  }

  export interface FontSize {
    h1: number
    h2: number
    h3: number
    h4: number
    h5: number
    t1: number
    t2: number
    t3: number
    t4: number
    t5: number
    t6: number
  }

  export interface FontWeight {
    h1: number
    h2: number
    h3: number
    h4: number
    h5: number
    t1: number
    t2: number
    t3: number
    t4: number
    t5: number
    t6: number
  }

  export interface LineHeight {
    h1: number
    h2: number
    h3: number
    h4: number
    h5: number
    t1: number
    t2: number
    t3: number
    t4: number
    t5: number
    t6: number
  }

  export interface LetterSpacing {
    h1: number
    h2: number
    h3: number
    h4: number
    h5: number
    t1: number
    t2: number
    t3: number
    t4: number
    t5: number
    t6: number
  }

  export interface DefaultTheme {
    color: Color
    fontWeight: FontWeight
    fontSize: FontSize
    lineHeight: LineHeight
    letterSpacing: LetterSpacing
  }
}
