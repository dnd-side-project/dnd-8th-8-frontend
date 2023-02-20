'use client'

import userState from '@/atoms/userAtom'
import OnBoardingLayout from '@/layouts/onboarding/onboardingLayout'
import { useRouter } from 'next/navigation'
import { useSetRecoilState } from 'recoil'

const WeddingStatus = () => {
  const router = useRouter()
  const setUserInfo = useSetRecoilState(userState)

  return (
    <OnBoardingLayout
      title={`현재 결혼을\n준비 중이신가요?`}
      subTitle={`자신의 상태를 알려주세요.`}
      hideSkipBtn={true}
      handleBackBtnClick={() => router.push('/onboarding/gender')}
      handleNextBtnClick={() => {
        setUserInfo((prev) => ({ ...prev, weddingStatus: 'Y' }))
        router.push('/onboarding/wedding-day')
      }}
    >
      <span>hello</span>
    </OnBoardingLayout>
  )
}

export default WeddingStatus
