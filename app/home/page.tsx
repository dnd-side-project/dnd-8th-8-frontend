'use client'

import { Badge, Text } from '@/components'
import { theme } from '@/styles'
import Image from 'next/image'
import styled from 'styled-components'

const Home = () => {
  return (
    <Layout>
      <HomeHeader>
        <MarriageInfoSection>
          <Text as="h3" color="neutral0">
            결혼까지 <LeftDays>{`365일`}</LeftDays>
          </Text>
          <Text as="h3" color="neutral0">{`남았어요!`}</Text>
          <BadgeSection>
            <Badge color="secondary500" backgroundColor="primary500">
              배우자 이석현님
            </Badge>
          </BadgeSection>
        </MarriageInfoSection>
        <ProfilePicSection>
          <ProfilePicWrapper>
            <Image
              src="/images/profile.jpg"
              alt="profile pic"
              fill
              sizes="100%"
            />
          </ProfilePicWrapper>
        </ProfilePicSection>
      </HomeHeader>
    </Layout>
  )
}

export default Home

const Layout = styled.div`
  width: 100%;
  height: 100%;
`

const HomeHeader = styled.div`
  display: grid;
  grid-template-columns: auto 9rem;
  width: 100%;
  height: 23rem;
  padding: 5rem 2rem 3rem;
  background: linear-gradient(194.48deg, #1f38bc -9.76%, #415ae2 88.62%);
`

const MarriageInfoSection = styled.div`
  width: 100%;
`

const ProfilePicSection = styled.div`
  width: 100%;
`

const ProfilePicWrapper = styled.div`
  position: relative;
  width: 9rem;
  height: 9rem;

  img {
    border-radius: 5rem;
  }
`

const BadgeSection = styled.div`
  margin-top: 1rem;
`

const LeftDays = styled.span`
  font-size: 2.4rem;
  font-weight: 600;
  color: ${theme.color.primary500};
`
