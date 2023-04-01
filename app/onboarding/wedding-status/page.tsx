'use client'

import userState from '@/atoms/userAtom'
import { OnBoardingLayout, SquareButton } from '@/layouts/onboarding'
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
        setUserInfo((prev) => ({
          ...prev,
          preparing: confirmedWedding === 'Y',
        }))
        router.push(
          confirmedWedding === 'Y'
            ? '/onboarding/wedding-day'
            : '/onboarding/wedding-day-season',
        )
      }}
    >
      <Layout>
        <SquareButton
          onClick={() => setConfirmedWedding('Y')}
          active={confirmedWedding === 'Y'}
          icon="o"
          iconColor="green"
          label="예"
        />
        <SquareButton
          onClick={() => setConfirmedWedding('N')}
          active={confirmedWedding === 'N'}
          icon="x"
          iconColor="primary600"
          label="아니오"
        />
      </Layout>
    </OnBoardingLayout>
  )
}

export default WeddingStatus

const Layout = styled.div`
  display: flex;
  column-gap: 1.2rem;
  justify-content: center;
  margin-top: 13rem;
`
