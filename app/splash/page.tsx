'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import styled from 'styled-components'

const Splash = () => {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/login')
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <SplashPageStyle>
      <SplashLogoWrapper>
        <Image
          src="/images/logo.splash.svg"
          alt="splash logo"
          fill
          sizes="100%"
          priority
        />
      </SplashLogoWrapper>
    </SplashPageStyle>
  )
}

const SplashPageStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(194.48deg, #1f38bc -9.76%, #415ae2 88.62%);
`

const SplashLogoWrapper = styled.div`
  position: relative;
  width: 7.5rem;
  height: 10.4rem;
`

export default Splash
