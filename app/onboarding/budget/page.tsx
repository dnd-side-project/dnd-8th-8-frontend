'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import styled from 'styled-components'

import userState from '@/atoms/userAtom'
import { Icon, Text } from '@/components'
import { OnBoardingLayout } from '@/layouts/onboarding'
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
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num) => (
            <NumberSectionButton
              key={num}
              id={num}
              onClick={(e) => handleNumberClick(e)}
            >
              <Text as="t1">{num}</Text>
            </NumberSectionButton>
          ))}

          <NumberSectionButton onClick={() => setBudget(0)}>
            <Text as="t3" color="neutral500">
              취소
            </Text>
          </NumberSectionButton>

          <NumberSectionButton onClick={(e) => handleNumberClick(e)}>
            <Text as="t1">0</Text>
          </NumberSectionButton>

          <NumberSectionButton onClick={handleDeleteNumber}>
            <Icon as="arrow-left" size={24} color="neutral900" />
          </NumberSectionButton>
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
  margin-top: 5.5rem;
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
`

const NumberSectionButton = styled.button`
  height: 6.8rem;
  background-color: transparent;
  border: none;
`

const BudgetNumber = styled.div`
  display: flex;
  column-gap: 0.5rem;
  align-items: baseline;
`

export default Budget
