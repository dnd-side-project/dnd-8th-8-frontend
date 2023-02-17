'use client'

import userState from '@/atoms/userAtom'
import OnBoardingLayout from '@/layouts/onboarding/onboardingLayout'
import { useRouter } from 'next/navigation'
import { useSetRecoilState } from 'recoil'

const WeddingDaySeason = () => {
  const router = useRouter()
  const setUserInfo = useSetRecoilState(userState)

  return (
    <OnBoardingLayout
      title={`어떤 계절에\n결혼하고 싶나요?`}
      subTitle={`아직 준비중이 아니시라면,\n결혼하고 싶은 연도와 계절을 알려주세요.`}
      handleSkipBtnClick={() => console.log('click')}
      handleNextBtnClick={() => {
        setUserInfo((prev) => ({ ...prev, weddingSeason: '2023-02-18' }))
        router.push('/onboarding/budget')
      }}
    >
      <span>hello</span>
    </OnBoardingLayout>
  )
}

export default WeddingDaySeason
