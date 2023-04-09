'use client'

import userState from '@/atoms/userAtom'
import { OnBoardingLayout, SquareButton } from '@/layouts/onboarding'
import { useUpdateGender } from '@/queries/user/useUpdateGender'
import { genderType } from '@/types/user'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import styled from 'styled-components'

const Gender = () => {
  const router = useRouter()
  const setUserInfo = useSetRecoilState(userState)
  const [gender, setGender] = useState<string>('')
  const { mutate: update } = useUpdateGender()

  return (
    <OnBoardingLayout
      title={`성별이\n어떻게 되시나요?`}
      subTitle={`현재 본인이 어디에 속해있는지\n알려주세요`}
      hideSkipBtn={true}
      buttonActive={gender !== ''}
      handleNextBtnClick={() => {
        setUserInfo((prev) => ({ ...prev, gender: gender as genderType }))
        update(gender as genderType)
        router.push('/onboarding/budget')
      }}
    >
      <Layout>
        <SquareButton
          onClick={() => setGender('FEMALE')}
          active={gender === 'FEMALE'}
          icon="bride"
          label="예비신부"
        />

        <SquareButton
          onClick={() => setGender('MALE')}
          active={gender === 'MALE'}
          icon="groom"
          label="예비신랑"
        />
      </Layout>
    </OnBoardingLayout>
  )
}

export default Gender

const Layout = styled.div`
  display: flex;
  column-gap: 1.2rem;
  justify-content: center;
  margin-top: 13rem;
`
