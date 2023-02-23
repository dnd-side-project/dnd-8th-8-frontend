'use client'

import userState from '@/atoms/userAtom'
import { OnBoardingLayout, SquareButton } from '@/layouts/onboarding'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import styled from 'styled-components'

const Gender = () => {
  const router = useRouter()
  const setUserInfo = useSetRecoilState(userState)
  const [gender, setGender] = useState<string>('')

  return (
    <OnBoardingLayout
      title={`어떤 역할을\n맡으셨나요?`}
      subTitle={`현재 본인이 어디에 속해있는지\n알려주세요`}
      hideSkipBtn={true}
      handleNextBtnClick={() => {
        setUserInfo((prev) => ({ ...prev, gender: 'man' }))
        router.push('/onboarding/budget')
      }}
    >
      <Layout>
        <SquareButton
          onClick={() => setGender('female')}
          active={gender === 'female'}
          emoji="👰"
          label="예비신부"
        />

        <SquareButton
          onClick={() => setGender('male')}
          active={gender === 'male'}
          emoji="🤵"
          label="예비신랑"
        />
      </Layout>
    </OnBoardingLayout>
  )
}

export default Gender

const Layout = styled.div`
  display: flex;
  column-gap: 12px;
  justify-content: center;
  margin-top: 130px;
`
