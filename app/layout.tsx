'use client'

import localFont from '@next/font/local'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RecoilRoot } from 'recoil'
import styled, { ThemeProvider } from 'styled-components'

import { Footer } from '@/components'
import { FOOTER_HEIGHT, MAIN_MENUS } from '@/constant'
import StyledComponentsRegistry from '@/lib/registry'
import { GlobalStyle, theme } from '@/styles'
import { usePathname } from 'next/navigation'

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
})

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient()
  const pathname = usePathname()

  const isMainMenu = (url: string | null) => {
    for (const menu of MAIN_MENUS) {
      if (url === menu) return true
    }

    return false
  }

  return (
    <html lang="ko" className={pretendard.className}>
      <head />

      <body>
        <QueryClientProvider client={queryClient}>
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
          <RecoilRoot>
            <StyledComponentsRegistry>
              <ThemeProvider theme={theme}>
                <GlobalStyle />
                <MobileLayout isMainMenu={isMainMenu(pathname)}>
                  {children}
                </MobileLayout>
                {isMainMenu(pathname) && <Footer />}
              </ThemeProvider>
            </StyledComponentsRegistry>
          </RecoilRoot>
        </QueryClientProvider>
      </body>
    </html>
  )
}

export default RootLayout

const MobileLayout = styled.div<{ isMainMenu: boolean }>`
  min-width: 36rem;
  max-width: 48rem;
  height: 100vh;
  min-height: 100vh;
  margin-bottom: ${({ isMainMenu }) => (isMainMenu ? FOOTER_HEIGHT : 0)};
  border: 1px solid red;
`
