'use client'

import userState from '@/atoms/userAtom'
import { Icon, Text } from '@/components'
import { OnBoardingLayout, SquareButton } from '@/layouts/onboarding'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import styled from 'styled-components'

const WeddingDaySeason = () => {
  const router = useRouter()
  const setUserInfo = useSetRecoilState(userState)
  const [year, setYear] = useState<string>(dayjs().format('YYYY'))
  const [season, setSeason] = useState<string>('')

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
      subTitle={`아직 준비중이 아니시라면,\n결혼하고 싶은 연도와 계절을 알려주세요.`}
      hideSkipBtn={true}
      handleBackBtnClick={() => router.push('/onboarding/wedding-status')}
      handleNextBtnClick={() => {
        setUserInfo((prev) => ({ ...prev, weddingSeason: '2023-02-18' }))
        router.push('/onboarding/gender')
      }}
    >
      <Layout>
        <YearControllerLayout>
          <YearControlBtn onClick={() => handleYearControlBtnClick('prev')}>
            {year !== dayjs().format('YYYY') && (
              <Icon as="chevron-left" color="neutral900" />
            )}
          </YearControlBtn>
          <YearDisplaySection>
            <Text as="t2" color="neutral900">
              {year}년
            </Text>
          </YearDisplaySection>

          <YearControlBtn onClick={() => handleYearControlBtnClick('next')}>
            <Icon as="chevron-right" color="neutral900" />
          </YearControlBtn>
        </YearControllerLayout>

        <SeasonButtonSection>
          <SquareButton
            onClick={() => setSeason('spring')}
            active={season === 'spring'}
            emoji="🌸"
            label="봄"
          />
          <SquareButton
            onClick={() => setSeason('summer')}
            active={season === 'summer'}
            emoji="🏝"
            label="여름"
          />
          <SquareButton
            onClick={() => setSeason('fall')}
            active={season === 'fall'}
            emoji="🍁"
            label="가을"
          />
          <SquareButton
            onClick={() => setSeason('winter')}
            active={season === 'winter'}
            emoji="☃️"
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
  margin-top: 30px;
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
  gap: 12px;
  margin-top: 30px;
`
