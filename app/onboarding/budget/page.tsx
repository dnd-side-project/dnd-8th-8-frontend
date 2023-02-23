'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import styled from 'styled-components'

import userState from '@/atoms/userAtom'
import { Icon, Text } from '@/components'
import { OnBoardingLayout } from '@/layouts/onboarding'
import { theme } from '@/styles'
import { getCurrencyStrFormat } from '@/utils'

const Budget = () => {
  const router = useRouter()
  const setUserInfo = useSetRecoilState(userState)
  const [budget, setBudget] = useState<number>(0)

  const handleNumberClick = (e: React.MouseEvent<HTMLElement>) => {
    const number = parseInt(e.currentTarget.id) * 10000
    setBudget((prev) => prev * 10 + number)
  }

  const handleDeleteNumber = () => {
    setBudget(parseInt(budget.toString().slice(0, -1)))
  }

  return (
    <OnBoardingLayout
      title={`예산 규모를\n알려주세요.`}
      subTitle={`추후 체크리스트에 견적을 등록하면\n총 예산에서 금액이 자동으로 차감돼요.`}
      handleSkipBtnClick={() => router.push('/onboarding/checklist')}
      handleBackBtnClick={() => router.push('/onboarding/gender')}
      handleNextBtnClick={() => {
        setUserInfo((prev) => ({ ...prev, budget }))
        router.push('/onboarding/checklist')
      }}
    >
      <Layout>
        <BudgetSection>
          {budget > 0 ? (
            <BudgetNumber>
              <Text as="h1">{getCurrencyStrFormat(budget).slice(0, -1)}</Text>
              <Text as="t1">{getCurrencyStrFormat(budget).at(-1)}원</Text>
            </BudgetNumber>
          ) : (
            <Text as="t1" color="neutral500">
              총 예산 입력
            </Text>
          )}

          <Text as="t4" color={budget > 0 ? 'neutral800' : 'neutral500'}>
            {getCurrencyStrFormat(budget)}원
          </Text>
        </BudgetSection>
        <NumberSection>
          <div id="1" onClick={(e) => handleNumberClick(e)}>
            1
          </div>
          <div id="2" onClick={(e) => handleNumberClick(e)}>
            2
          </div>
          <div id="3" onClick={(e) => handleNumberClick(e)}>
            3
          </div>
          <div id="4" onClick={(e) => handleNumberClick(e)}>
            4
          </div>
          <div id="5" onClick={(e) => handleNumberClick(e)}>
            5
          </div>
          <div id="6" onClick={(e) => handleNumberClick(e)}>
            6
          </div>
          <div id="7" onClick={(e) => handleNumberClick(e)}>
            7
          </div>
          <div id="8" onClick={(e) => handleNumberClick(e)}>
            8
          </div>
          <div id="9" onClick={(e) => handleNumberClick(e)}>
            9
          </div>
          <String onClick={() => setBudget(0)}>취소</String>
          <div id="0" onClick={(e) => handleNumberClick(e)}>
            0
          </div>
          <String onClick={handleDeleteNumber}>
            <Icon as="arrow-left" size={24} color="neutral900" />
          </String>
        </NumberSection>
      </Layout>
    </OnBoardingLayout>
  )
}

const Layout = styled.div`
  display: grid;
  grid-template-rows: 10rem auto;
  row-gap: 2rem;
  width: 100%;
  height: 100%;
  margin-top: 55px;
`

const BudgetSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const NumberSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 3.2rem;
  }
`

const BudgetNumber = styled.div`
  display: flex;
  column-gap: 0.5rem;
  align-items: baseline;
`

const String = styled.div`
  font-size: 1.6rem !important;
  font-weight: 500 !important;
  line-height: 2.4rem !important;
  color: ${theme.color.neutral500} !important;
`

export default Budget
