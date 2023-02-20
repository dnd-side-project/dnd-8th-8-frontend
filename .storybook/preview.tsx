import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addDecorator } from '@storybook/react'
import React from 'react'
import { useDarkMode } from 'storybook-dark-mode'
import { ThemeProvider } from 'styled-components'
import { RouterContext } from "next/dist/shared/lib/router-context";


import { GlobalStyle, theme } from '../styles'
import { dark, light } from './theme'

addDecorator((Story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Story />
  </ThemeProvider>
))

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone12mini',
  },
  darkMode: {
    current: 'light',
    light,
    dark,
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}
