'use client'

import userState from '@/atoms/userAtom'
import { Icon, Text } from '@/components'
import { OnBoardingLayout, SquareButton } from '@/layouts/onboarding'
import { useCreateMarriageStatus } from '@/queries/user/useCreateMarriageStatus'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'

const DATE: { [key: string]: string } = {
  spring: '03-01',
  summer: '06-01',
  fall: '09-01',
  winter: '12-01',
}

const WeddingDaySeason = () => {
  const router = useRouter()
  const [userInfo, setUserInfo] = useRecoilState(userState)
  const [year, setYear] = useState<string>(dayjs().format('YYYY'))
  const [season, setSeason] = useState<string>('')
  const { mutate: create } = useCreateMarriageStatus()

  const handleYearControlBtnClick = (type: 'prev' | 'next') => {
    switch (type) {
      case 'prev':
        setYear(dayjs(year).subtract(1, 'year').format('YYYY'))
        break
      case 'next':
        setYear(dayjs(year).add(1, 'year').format('YYYY'))
        break
    }
  }

  return (
    <OnBoardingLayout
      title={`어떤 계절에\n결혼하고 싶나요?`}
      subTitle={`아직 구체적인 계획이 없으시다면\n결혼하고 싶은 연도와 계절을 알려주세요.`}
      hideSkipBtn={true}
      handleBackBtnClick={() => router.push('/onboarding/wedding-status')}
      handleNextBtnClick={() => {
        const date = `${year}-${DATE[season]}`
        setUserInfo((prev) => ({
          ...prev,
          weddingDay: date,
        }))
        create({
          weddingDay: date,
          preparing: userInfo.preparing,
        })
      }}
    >
      <Layout>
        <YearControllerLayout>
          <YearControlBtn onClick={() => handleYearControlBtnClick('prev')}>
            {year !== dayjs().format('YYYY') && (
              <Icon name="chevron-left" color="neutral900" />
            )}
          </YearControlBtn>
          <YearDisplaySection>
            <Text as="t2" color="neutral900">
              {year}년
            </Text>
          </YearDisplaySection>

          <YearControlBtn onClick={() => handleYearControlBtnClick('next')}>
            <Icon name="chevron-right" color="neutral900" />
          </YearControlBtn>
        </YearControllerLayout>

        <SeasonButtonSection>
          <SquareButton
            onClick={() => setSeason('spring')}
            active={season === 'spring'}
            icon="flower"
            label="봄"
          />
          <SquareButton
            onClick={() => setSeason('summer')}
            active={season === 'summer'}
            icon="island"
            label="여름"
          />
          <SquareButton
            onClick={() => setSeason('fall')}
            active={season === 'fall'}
            icon="maple"
            label="가을"
          />
          <SquareButton
            onClick={() => setSeason('winter')}
            active={season === 'winter'}
            icon="snowman"
            label="겨울"
          />
        </SeasonButtonSection>
      </Layout>
    </OnBoardingLayout>
  )
}

export default WeddingDaySeason

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const YearControllerLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 27rem;
  margin-top: 3rem;
`

const YearControlBtn = styled.button`
  width: 3rem;
  background-color: transparent;
  border: none;
`

const YearDisplaySection = styled.div`
  width: 6rem;
`

const SeasonButtonSection = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
  margin-top: 3rem;
`
