'use client'

import userState from '@/atoms/userAtom'
import OnBoardingLayout from '@/layouts/onboarding/onboardingLayout'
import { useRouter } from 'next/navigation'
import { useSetRecoilState } from 'recoil'

const Checklist = () => {
  const router = useRouter()
  const setUserInfo = useSetRecoilState(userState)

  return (
    <OnBoardingLayout
      title={`확정된 일정이 있다면\n선택해주세요.`}
      subTitle={`확정된 일정을 체크하면\n메인화면에서 확인할 수 있어요.`}
      handleSkipBtnClick={() => console.log('click')}
      handleNextBtnClick={() => {
        setUserInfo((prev) => ({ ...prev, checklist: ['예식장', '상견례'] }))
        router.push('/home')
      }}
    >
      <span>hello</span>
    </OnBoardingLayout>
  )
}

export default Checklist
