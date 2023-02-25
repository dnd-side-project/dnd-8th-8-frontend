'use client'

import localFont from '@next/font/local'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RecoilRoot } from 'recoil'
import styled, { ThemeProvider } from 'styled-components'

import { Footer } from '@/components'
import { FOOTER_HEIGHT, PAGE_URL } from '@/constant'
import StyledComponentsRegistry from '@/lib/registry'
import { GlobalStyle, theme } from '@/styles'
import { usePathname } from 'next/navigation'

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
})

const MAIN_MENUS = [
  PAGE_URL.HOME,
  PAGE_URL.CHECKLIST,
  PAGE_URL.COLLECTION,
  PAGE_URL.COMMUNITY,
  PAGE_URL.MYPAGE,
]
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient()
  const pathname = usePathname()

  const isMainMenu = (url: string | null) =>
    url ? MAIN_MENUS.includes(url) : false
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
                <MobileLayout>
                  <Layout isMainMenu={isMainMenu(pathname)}>{children}</Layout>
                  {isMainMenu(pathname) && <Footer />}
                </MobileLayout>
              </ThemeProvider>
            </StyledComponentsRegistry>
          </RecoilRoot>
        </QueryClientProvider>
      </body>
    </html>
  )
}

export default RootLayout

const MobileLayout = styled.div`
  width: 36rem;
  min-width: 360px;
  max-width: 480px;
  height: 100vh;
  min-height: 100vh;

  /* TODO : 개발 목적. 완료시 삭제 예정 */
  border: 1px solid red;
`

const Layout = styled.div`
  width: 36rem;
  min-width: 36rem;
  max-width: 48rem;
  height: ${(props: { isMainMenu: boolean }) =>
    props.isMainMenu ? `calc(100vh - ${FOOTER_HEIGHT})` : '100vh'};
`
