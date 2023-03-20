'use client'

import styled from 'styled-components'

import { Badge, FloatingButton, Icon, Text } from '@/components'
import { Input } from '@/components/Input'
import { useGetChecklist } from '@/queries/useGetChecklist'
import { theme } from '@/styles'
import Image from 'next/image'
import ScheduleCard from './components/ScheduleCard'

const Home = () => {
  const { data } = useGetChecklist()
  console.log(data)
  return (
    <Layout>
      <HomeHeader>
        <ConnectSpouseSection>
          <StackedProfilePicSection>
            <ImgWrapper style={{ zIndex: 10 }}>
              <Image alt="profile pic" src="/images/default-icon.svg" fill />
            </ImgWrapper>
            <ImgWrapper style={{ position: 'absolute', right: 0, zIndex: 5 }}>
              <Image alt="profile pic" src="/images/default-icon.svg" fill />
            </ImgWrapper>
          </StackedProfilePicSection>
          <Text as="t5" color="neutral500">
            배우자를 연동해주세요.
          </Text>
        </ConnectSpouseSection>
        <UserInfoSection>
          <GraphicImageWrapper>
            <Image
              src="/images/home-graphic-purple.svg"
              alt="home graphic"
              fill
            />
          </GraphicImageWrapper>
          <MarriageInfoSection>
            <TextSection>
              <Text as="h3" color="secondary900">{`석현님, 2024년\n`}</Text>
              <WeddingDaySentence>
                <Text as="h3" color="secondary900">
                  <Highlight>가을</Highlight>즈음에 결혼해요
                  <Icon name="heart" size={20} color={'primary500'} />
                </Text>
              </WeddingDaySentence>
            </TextSection>

            <Badge backgroundColor={'neutral100'}>
              <Text as="h5" color="neutral600">
                결혼예정일을 입력해보세요
              </Text>
            </Badge>
          </MarriageInfoSection>
        </UserInfoSection>
      </HomeHeader>
      <InputSection>
        <Input
          placeholder="일정을 검색해보세요."
          handleChange={(e: React.FormEvent<HTMLInputElement>) =>
            console.log(e.currentTarget.value)
          }
          borderStyle
          searchIcon
        />
      </InputSection>
      <HomeContentSection>
        <TimelineSection>
          <ScheduleCard cardTheme={'normal'} />
          <ScheduleCard cardTheme={'active'} />
          <ScheduleCard cardTheme={'active'} />
        </TimelineSection>
      </HomeContentSection>
      <FloatingButton icon={'pencil'} onClick={() => console.log('click')} />
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
  grid-template-rows: 4rem auto;
  row-gap: 3rem;
  width: 100%;
  height: 22rem;
  padding: 2.5rem 2rem;
`

const ConnectSpouseSection = styled.div`
  display: flex;
  align-items: center;
`

const ImgWrapper = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;

  img {
    border-radius: 5rem;
  }
`

const GraphicImageWrapper = styled.div`
  position: relative;
  width: 8rem;
  height: 8rem;
`

const StackedProfilePicSection = styled.div`
  position: relative;
  display: flex;
  width: 7rem;
  height: 100%;
`

const WeddingDaySentence = styled.div`
  h3 {
    width: 24rem;
    letter-spacing: -2px;
  }

  svg {
    margin-left: 0.5rem;
  }
`

const UserInfoSection = styled.div`
  display: grid;
  grid-template-columns: 8rem auto;
  column-gap: 1rem;
  height: 100%;
`

const TextSection = styled.div`
  margin-bottom: 1rem;
`
const MarriageInfoSection = styled.div``

const InputSection = styled.div`
  width: 100%;
  height: 4rem;
  padding: 0 2rem;
`

const HomeContentSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 6rem - 22rem - 4rem);
  margin-top: 2rem;
  overflow-y: scroll;
`

const TimelineSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 85%;
  height: 100%;
  border-left: 1px solid ${theme.color.neutral300};
`
const Highlight = styled.span`
  font-size: 2.4rem;
  font-weight: 600;
  color: ${theme.color.primary500};
`
