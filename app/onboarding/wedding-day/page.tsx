'use client'

import userState from '@/atoms/userAtom'
import OnBoardingLayout from '@/layouts/onboarding/onboardingLayout'
import { useRouter } from 'next/navigation'
import { useSetRecoilState } from 'recoil'

const WeddingDay = () => {
  const router = useRouter()
  const setUserInfo = useSetRecoilState(userState)

  return (
    <OnBoardingLayout
      title={`결혼식 예정일이\n언제인가요? 🎉`}
      subTitle={`결혼식 예정일을 기준으로\nD-DAY를 알려드려요.`}
      hideSkipBtn={true}
      handleBackBtnClick={() => router.push('/onboarding/wedding-status')}
      handleNextBtnClick={() => {
        setUserInfo((prev) => ({ ...prev, weddingDay: '2023-02-18' }))
        router.push('/onboarding/budget')
      }}
    >
      <span>hello</span>
    </OnBoardingLayout>
  )
}

export default WeddingDay
