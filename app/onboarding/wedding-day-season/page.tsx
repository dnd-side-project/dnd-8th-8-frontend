'use client'

import userState from '@/atoms/userAtom'
import { Text } from '@/components'
import OnBoardingLayout from '@/layouts/onboarding/onboardingLayout'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import styled from 'styled-components'

const WeddingDaySeason = () => {
  const router = useRouter()
  const setUserInfo = useSetRecoilState(userState)
  const [year, setYear] = useState<string>(dayjs().format('YYYY'))

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
        router.push('/onboarding/budget')
      }}
    >
      <Layout>
        <YearControllerLayout>
          <YearControlBtnSection>
            {year !== dayjs().format('YYYY') && (
              <button onClick={() => handleYearControlBtnClick('prev')}>
                이전
              </button>
            )}
          </YearControlBtnSection>
          <YearDisplaySection>
            <Text as="t2" color="neutral900">
              {year}년
            </Text>
          </YearDisplaySection>
          <YearControlBtnSection>
            <button onClick={() => handleYearControlBtnClick('next')}>
              다음
            </button>
          </YearControlBtnSection>
        </YearControllerLayout>
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
`

const YearControlBtnSection = styled.div`
  width: 3rem;
`

const YearDisplaySection = styled.div`
  width: 6rem;
`
