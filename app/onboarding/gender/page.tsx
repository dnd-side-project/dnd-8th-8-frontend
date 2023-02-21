'use client'

import userState from '@/atoms/userAtom'
import { Button } from '@/components'
import { useRouter } from 'next/navigation'
import { useSetRecoilState } from 'recoil'
import styled from 'styled-components'
import OnBoardingLayout from '../../../layouts/onboarding/onboardingLayout'

const Gender = () => {
  const router = useRouter()
  const setUserInfo = useSetRecoilState(userState)
  return (
    <OnBoardingLayout
      title={`어떤 역할을\n맡으셨나요?`}
      subTitle={`현재 본인이 어디에 속해있는지\n알려주세요`}
      hideBackBtn={true}
      hideSkipBtn={true}
      handleNextBtnClick={() => {
        setUserInfo((prev) => ({ ...prev, gender: 'man' }))
        router.push('/onboarding/budget')
      }}
    >
      <Layout>
        <GenderBtns>
          <Button>
            <ButtonLayout>
              <span>👰</span>
              <span>예비신부</span>
            </ButtonLayout>
          </Button>
          <Button>
            <ButtonLayout>
              <span>🤵</span>
              <span>예비신랑</span>
            </ButtonLayout>
          </Button>
        </GenderBtns>
      </Layout>
    </OnBoardingLayout>
  )
}

export default Gender

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`

const ButtonLayout = styled.div`
  display: flex;
  flex-direction: column;

  span:nth-child(1) {
    margin-bottom: 1.5rem;
  }
`

const GenderBtns = styled.div`
  display: flex;
  column-gap: 1rem;
`
