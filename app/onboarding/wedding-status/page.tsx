'use client'

import OnBoardingLayout from '@/layouts/onboarding/onboardingLayout'
import { useRouter } from 'next/navigation'

const WeddingStatus = () => {
  const router = useRouter()
  return (
    <OnBoardingLayout
      title={'어떤 역할을맡으셨나요?'}
      subTitle="현재 본인이 어디에 속해있는지"
      handleSkipBtnClick={() => console.log('click')}
      handleNextBtnClick={() => router.push('/onboarding/wedding-day')}
    >
      <span>hello</span>
    </OnBoardingLayout>
  )
}

export default WeddingStatus
