'use client'

import userState from '@/atoms/userAtom'
import OnBoardingLayout from '@/layouts/onboarding/onboardingLayout'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import styled from 'styled-components'

const WeddingStatus = () => {
  const router = useRouter()
  const setUserInfo = useSetRecoilState(userState)
  const [confirmedWedding, setConfirmedWedding] = useState<string>('')

  return (
    <OnBoardingLayout
      title={`현재 결혼을\n준비 중이신가요?`}
      subTitle={`자신의 상태를 알려주세요.`}
      hideSkipBtn={true}
      hideBackBtn={true}
      handleNextBtnClick={() => {
        setUserInfo((prev) => ({ ...prev, weddingStatus: confirmedWedding }))
        router.push(
          confirmedWedding === 'Y'
            ? '/onboarding/wedding-day'
            : '/onboarding/wedding-day-season',
        )
      }}
    >
      <Layout>
        <button onClick={() => setConfirmedWedding('Y')}>예</button>
        <button onClick={() => setConfirmedWedding('N')}>아니오</button>
      </Layout>
    </OnBoardingLayout>
  )
}

export default WeddingStatus

const Layout = styled.div`
  display: flex;
  column-gap: 2rem;
  justify-content: center;
`
