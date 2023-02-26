'use client'

import { Button, Icon } from '@/components'
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
        <Button
          onClick={() => router.push('/onboarding/wedding-status')}
          fullWidth
          backgroundColor="neutral0"
          border={true}
          borderColor="neutral300"
        >
          <ButtonTitleSection>
            <IconSection>
              <Icon as="google" />
            </IconSection>
            구글로 로그인
          </ButtonTitleSection>
        </Button>
        <Button
          onClick={() => router.push('/onboarding/wedding-status')}
          fullWidth
          backgroundColor="#F6DB4F"
          color="neutral900"
        >
          <ButtonTitleSection>
            <IconSection>
              <Icon as="kakao" />
            </IconSection>
            카카오톡으로 로그인
          </ButtonTitleSection>
        </Button>
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
  width: 100%;
  padding: 0 2rem;

  button:nth-child(1) {
    margin-bottom: 1rem;
  }
`

const ButtonTitleSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 1.4rem;
  font-weight: 600;
  color: 'neutral0';
`

const IconSection = styled.div`
  position: absolute;
  left: 6rem;
  margin-top: 0.4rem;
`

export default Login
