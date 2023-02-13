import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
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
      secondary500: string
      secondary900: string
    }
    fontSize: {
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
    }
    fontWeight: {
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
    }
    lineHeight: {
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
    }
  }
}
