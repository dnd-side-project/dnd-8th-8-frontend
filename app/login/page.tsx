'use client'

import { Button, Icon, Text } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const Login = () => {
  return (
    <Layout>
      <LogoWrapper>
        <Image
          alt="login logo"
          src="/images/logo.login.svg"
          width={85}
          height={117}
          priority
        />
      </LogoWrapper>
      <ButtonsWrapper>
        <Link
          style={{ textDecoration: 'none' }}
          href={
            'http://weddingmap-elb-346454866.ap-northeast-2.elb.amazonaws.com/oauth2/authorization/google?redirect_uri=http://localhost:3000/auth/callback'
          }
        >
          <Button
            fullWidth
            backgroundColor="neutral0"
            border={true}
            borderColor="neutral300"
          >
            <ButtonTitleSection>
              <IconSection>
                <Icon name="google" />
              </IconSection>
              <Text as="h5">구글로 로그인</Text>
            </ButtonTitleSection>
          </Button>
        </Link>
        <Link
          style={{ textDecoration: 'none' }}
          href={
            'http://weddingmap-elb-346454866.ap-northeast-2.elb.amazonaws.com/oauth2/authorization/kakao?redirect_uri=http://localhost:3000/auth/callback'
          }
        >
          <Button fullWidth backgroundColor="#F6DB4F">
            <ButtonTitleSection>
              <IconSection>
                <Icon name="kakao" />
              </IconSection>
              <Text as="h5">카카오톡으로 로그인</Text>
            </ButtonTitleSection>
          </Button>
        </Link>
      </ButtonsWrapper>
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 0 2rem;
  margin-bottom: 12.8rem;
`

const ButtonTitleSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const IconSection = styled.div`
  position: absolute;
  left: 6rem;
  margin-top: 0.4rem;
`

export default Login
