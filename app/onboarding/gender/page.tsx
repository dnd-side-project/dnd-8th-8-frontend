'use client'

import userState from '@/atoms/userAtom'
import { useRouter } from 'next/navigation'
import { useSetRecoilState } from 'recoil'
import OnBoardingLayout from '../../../layouts/onboarding/onboardingLayout'

const Gender = () => {
  const router = useRouter()
  const setUserInfo = useSetRecoilState(userState)
  return (
    <OnBoardingLayout
      title={`어떤 역할을\n맡으셨나요?`}
      subTitle={`현재 본인이 어디에 속해있는지\n알려주세요`}
      handleSkipBtnClick={() => console.log('click')}
      handleNextBtnClick={() => {
        setUserInfo((prev) => ({ ...prev, gender: 'man' }))
        router.push('/onboarding/wedding-status')
      }}
    >
      <span>hello</span>
    </OnBoardingLayout>
  )
}

export default Gender
