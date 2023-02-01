'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useServerInsertedHTML } from 'next/navigation'
import { RecoilRoot } from 'recoil'
import styled, { ThemeProvider } from 'styled-components'

import { Navbar } from '@/components'
import { useStyledComponentsRegistry } from '@/hooks'
import { GlobalStyle, theme } from '@/styles'

const RootStyleLayout = ({ children }: { children: React.ReactNode }) => {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] =
    useStyledComponentsRegistry()

  useServerInsertedHTML(() => <>{styledComponentsFlushEffect()}</>)

  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient()

  return (
    <html lang="ko">
      <head />

      <body>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <RecoilRoot>
            <RootStyleLayout>
              <ThemeProvider theme={theme}>
                <GlobalStyle />

                <MobileLayout>
                  <Navbar />

                  {children}
                </MobileLayout>
              </ThemeProvider>
            </RootStyleLayout>
          </RecoilRoot>
        </QueryClientProvider>
      </body>
    </html>
  )
}

export default RootLayout

const MobileLayout = styled.div`
  min-width: 360px;
  max-width: 480px;
  min-height: 100vh;

  /* TODO : 개발 목적. 완료시 삭제 예정 */
  border: 1px solid red;
`
