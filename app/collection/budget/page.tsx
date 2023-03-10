'use client'

import styled from 'styled-components'

import { DDayBadge, FloatingButton, Icon, Menu, Tab, Text } from '@/components'
import { BudgetCard } from '@/layouts/budget'
import { getCurrencyFormat, getTimeFormat, yyyymmdd } from '@/utils'
import { useState } from 'react'

const Budget = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const tabs = [
    { label: '예산표', path: '/collection/budget' },
    { label: '계약서', path: '/collection/contract' },
  ]

  const { year, month, date } = getTimeFormat(new Date())

  return (
    <>
      <Tab tabs={tabs} />

      <Layout>
        <HeaderSection>
          <HeaderTitleSection>
            <Text as="h2">현재 예산</Text>
            <DDayBadge day={20} />
          </HeaderTitleSection>
          <HeaderDescSection>
            <Text as="t3" color="neutral500">
              석현님, 차근차근 정리하고 계시군요.
            </Text>
          </HeaderDescSection>
        </HeaderSection>

        <ContentSection>
          <BudgetBoard>
            <BudgetBoardMenuButton onClick={handleMenu}>
              <Icon name="more-horizontal" color="neutral300" />
              {isMenuOpen && (
                <Menu items={[{ label: '수정', onClick: () => null }]} />
              )}
            </BudgetBoardMenuButton>

            <Text as="t5" color="neutral300">
              {yyyymmdd(year, month, date).replace(/-/g, '. ')}
            </Text>

            <BudgetTitle>
              <Icon name="money" size={24} />
              <Text as="h4" color="neutral0">
                현재 예산
              </Text>
            </BudgetTitle>

            <BudgetMoney>
              <Text as="h2" color="neutral0">
                {getCurrencyFormat(1000000)}
              </Text>

              <BudgetMoneyUnit>
                <Text as="t3" color="neutral0">
                  원
                </Text>
              </BudgetMoneyUnit>
            </BudgetMoney>
          </BudgetBoard>
        </ContentSection>

        <CardSection>
          <CardSectionEditButton onClick={() => null}>
            <Text as="t4" color="neutral800">
              편집
            </Text>
          </CardSectionEditButton>

          <MonthSection>
            <Text as="t3">3월</Text>
            <BudgetCard />
            <BudgetCard />
            <BudgetCard />
          </MonthSection>

          <MonthSection>
            <Text as="t3">4월</Text>
            <BudgetCard />
            <BudgetCard />
            <BudgetCard />
          </MonthSection>
        </CardSection>

        <FloatingButton icon="pencil" onClick={() => null} />
      </Layout>
    </>
  )
}

export default Budget

const Layout = styled.div`
  margin: 4rem 2rem;
`

const HeaderSection = styled.div`
  margin-bottom: 4rem;
`

const HeaderTitleSection = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
`

const HeaderDescSection = styled.div``

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const BudgetBoard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 17rem;
  margin-bottom: 4rem;
  background: linear-gradient(194.48deg, #1f38bc -9.76%, #415ae2 88.62%);
  border-radius: 22px;
  box-shadow: 6px 4px 18px 3px rgb(0 0 0 / 11%);
`

const BudgetBoardMenuButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 2rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
`

const BudgetTitle = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  margin: 0.4rem 0 1rem;
`
const BudgetMoney = styled.div`
  display: flex;
  gap: 0.4rem;
`

const BudgetMoneyUnit = styled.div`
  align-self: flex-end;
  padding-bottom: 0.2rem;
`

const CardSection = styled.div`
  position: relative;
`

const CardSectionEditButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  background-color: transparent;
  border: none;
`

const MonthSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;
`
