'use client'

import styled from 'styled-components'

import { Badge, FloatingButton, Icon, Text } from '@/components'
import { Input } from '@/components/Input'
import { theme } from '@/styles'
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineOppositeContentClasses,
  TimelineSeparator,
} from '@mui/lab'
import Image from 'next/image'
import { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import ScheduleCard from './components/ScheduleCard'

const Home = () => {
  const [index, setIndex] = useState(0)

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

      <SwipeableViews onChangeIndex={(index) => setIndex(index)}>
        <div>
          <RoadMapLayout>
            <DescriptionBox>
              <Text as="t4" color="secondary400">
                일정을 등록하여 로드맵을 완성해보세요!
              </Text>
            </DescriptionBox>

            <RoadMapDivider />
          </RoadMapLayout>
        </div>

        <div>
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
            <Timeline
              sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                  flex: 0.2,
                },
                ['.css-ha3bif-MuiTimelineItem-root:before']: {
                  padding: '2px',
                  content: 'none',
                },
              }}
              style={{ height: '100%', paddingTop: '2rem' }}
            >
              <TimelineItem style={{ marginBottom: '0.5rem' }}>
                <TimelineSeparator>
                  <TimelineDot
                  // style={{
                  //   backgroundColor: `${
                  //     v === 1
                  //       ? theme.color.secondary500
                  //       : theme.color.neutral300
                  //   }`,
                  // }}
                  />
                  <TimelineConnector
                    style={{
                      backgroundColor: theme.color.neutral300,
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent style={{ padding: '6px 0 6px 13px' }}>
                  <ScheduleCard cardTheme="active" />
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </HomeContentSection>
        </div>
      </SwipeableViews>

      <PageIndicator>
        <PageIndicatorDot active={index === 0} />
        <PageIndicatorDot active={index === 1} />
      </PageIndicator>

      <FloatingButton icon={'pencil'} onClick={() => console.log('click')} />
    </Layout>
  )
}

export default Home

const Layout = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 2rem;
`

const HomeHeader = styled.div`
  display: grid;
  grid-template-rows: 4rem auto;
  row-gap: 3rem;
  width: 100%;
  height: 22rem;
  padding: 2.5rem 0;
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
`

const HomeContentSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 6rem - 22rem - 4rem);
  overflow-x: hidden;
`
const Highlight = styled.span`
  font-size: 2.4rem;
  font-weight: 600;
  color: ${theme.color.primary500};
`

const RoadMapLayout = styled.div``

const PageIndicator = styled.div`
  position: fixed;
  bottom: 7.4rem;
  left: 50%;
  display: flex;
  gap: 1rem;
  justify-content: center;
  width: 100%;
  transform: translate(-50%, -50%);
`

const PageIndicatorDot = styled.div<{ active?: boolean }>`
  width: 0.8rem;
  height: 0.8rem;
  background-color: ${({ active }) =>
    active ? theme.color.secondary500 : theme.color.neutral300};
  border-radius: 50%;
`

const DescriptionBox = styled.div`
  padding: 1rem 2rem;
  margin: 0 calc(5.4rem - 2rem);
  text-align: center;
  background-color: ${theme.color.secondary100};
  border-radius: 0.8rem;
`

const RoadMapDivider = styled.div`
  height: 0.1rem;
  margin: 2.4rem calc(12.5rem - 2rem) 5rem;
  background-color: ${theme.color.secondary100};
`
