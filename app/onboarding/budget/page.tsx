'use client'

import userState from '@/atoms/userAtom'
import OnBoardingLayout from '@/layouts/onboarding/onboardingLayout'
import { useRouter } from 'next/navigation'
import { useSetRecoilState } from 'recoil'

const Budget = () => {
  const router = useRouter()
  const setUserInfo = useSetRecoilState(userState)
  return (
    <OnBoardingLayout
      title={`예산 규모를\n알려주세요.`}
      subTitle={`추후 체크리스트에 견적을 등록하면\n총 예산에서 금액이 자동으로 차감돼요.`}
      handleSkipBtnClick={() => console.log('click')}
      handleNextBtnClick={() => {
        setUserInfo((prev) => ({ ...prev, budet: 30000 }))
        router.push('/onboarding/checklist')
      }}
    >
      <span>hello</span>
    </OnBoardingLayout>
  )
}

export default Budget
