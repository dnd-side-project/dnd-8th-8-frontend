'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'

const Splash = () => {
  const router = useRouter()
  const [startFadeoutAnimation, setStartFadeOutAnimation] =
    useState<boolean>(false)
  useEffect(() => {
    let timer: NodeJS.Timeout
    new Promise(function (resolve) {
      timer = setTimeout(() => {
        setStartFadeOutAnimation(true)
        resolve('success')
      }, 1500)
    }).then(() => router.push('/login'))

    return () => clearTimeout(timer)
  }, [])

  return (
    <Layout startFadeoutAnimation={startFadeoutAnimation}>
      <LogoWrapper>
        <Image
          src="/images/logo.splash.svg"
          alt="splash logo"
          fill
          sizes="100%"
          priority
        />
      </LogoWrapper>
    </Layout>
  )
}

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(194.48deg, #1f38bc -9.76%, #415ae2 88.62%);
  animation: ${(props: { startFadeoutAnimation: boolean }) =>
    props.startFadeoutAnimation &&
    css`
      ${fadeOut} .5s linear forwards
    `};
`

const LogoWrapper = styled.div`
  position: relative;
  width: 7.5rem;
  height: 10.4rem;
`

export default Splash
