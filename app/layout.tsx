'use client'

import { ThemeProvider } from 'styled-components'

import Navbar from '@/components/Navbar'
import { GlobalStyle, theme } from '@/styles'

import RootStyleLayout from './styleLayout'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <head />

      <body>
        <RootStyleLayout>
          <ThemeProvider theme={theme}>
            <GlobalStyle />

            <div>
              <Navbar />

              {children}
            </div>
          </ThemeProvider>
        </RootStyleLayout>
      </body>
    </html>
  )
}

export default RootLayout
