'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'

const Login = () => {
  const router = useRouter()
  return (
    <Layout>
      <LogoWrapper>
        <Image
          alt="login logo"
          src="/images/logo.login.svg"
          fill
          sizes="100%"
          priority
        />
      </LogoWrapper>
      <ButtonsWrapper>
        <button onClick={() => router.push('/onboarding/gender')}>
          Google Login
        </button>
        <button onClick={() => router.push('/onboarding/gender')}>
          Kakao Login
        </button>
      </ButtonsWrapper>
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 10rem;
`

const LogoWrapper = styled.div`
  position: relative;
  width: 8.5rem;
  height: 11.7rem;
  margin-bottom: 15.7rem;
`

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  button:nth-child(1) {
    margin-bottom: 1rem;
  }
`

export default Login
