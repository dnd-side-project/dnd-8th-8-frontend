'use client'

import styled from 'styled-components'

import {
  Button,
  DDayBadge,
  FloatingButton,
  Icon,
  Menu,
  Modal,
  Tab,
  Text,
} from '@/components'
import { BudgetCard } from '@/layouts/budget'
import { useDeletesTransaction } from '@/queries/transaction/useDeleteTransaction'
import { useGetBudget } from '@/queries/transaction/useGetBudget'
import { useGetTransactionList } from '@/queries/transaction/useGetTransactionList'
import { TransactionResp } from '@/types/api/transaction'
import { getCurrencyFormat, getTimeFormat, yyyymmdd } from '@/utils'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const Budget = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [budget, setBudget] = useState(0)
  const [transactionList, setTransactionList] = useState<TransactionResp[]>([])
  const router = useRouter()

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const { data: budgetData } = useGetBudget()
  const { data: transactionData } = useGetTransactionList()
  const { mutate } = useDeletesTransaction()

  useEffect(() => {
    if (budgetData) {
      setBudget(budgetData.data.budget)
    }
  }, [budgetData])

  useEffect(() => {
    if (transactionData) {
      setTransactionList(transactionData.data)
    }
  }, [transactionData])

  const transactionDataSortByDate = () => {
    interface SortedData {
      [key: string]: TransactionResp[]
    }
    const sortedData: SortedData = {}

    transactionList.forEach((item) => {
      const yyyymm = item.transactionDate.substring(0, 7)

      sortedData[yyyymm]
        ? sortedData[yyyymm].push(item)
        : (sortedData[yyyymm] = [item])
    })

    return sortedData
  }

  const onClickDelete = (e: MouseEvent, id: number) => {
    e.stopPropagation()
    mutate(id)
  }

  const sortedTransactionData = transactionDataSortByDate()

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
                <Menu
                  items={[
                    { label: '수정', onClick: () => setEditModalOpen(true) },
                  ]}
                />
              )}

              {editModalOpen && (
                <Modal
                  isOpen={editModalOpen}
                  onClose={() => setEditModalOpen(false)}
                >
                  <EditModalContainer>
                    <Text as="t3" color="neutral600">
                      예산 금액 수정
                    </Text>

                    <BudgetInput
                      value={budgetData ? budgetData.data.budget : 0}
                      onChange={(e) => setBudget(Number(e.target.value))}
                    />

                    <ButtonWrapper>
                      <Button
                        backgroundColor="secondary100"
                        fullWidth
                        onClick={() => setEditModalOpen(false)}
                      >
                        <Text as="t4" color="neutral800">
                          취소
                        </Text>
                      </Button>
                      <Button
                        backgroundColor="secondary500"
                        fullWidth
                        onClick={() => setEditModalOpen(false)}
                      >
                        <Text as="t4" color="neutral0">
                          확인
                        </Text>
                      </Button>
                    </ButtonWrapper>
                  </EditModalContainer>
                </Modal>
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
                {getCurrencyFormat(budget)}
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
          <CardSectionEditButton onClick={() => setIsEdit((prev) => !prev)}>
            <Text as="t4" color={isEdit ? 'secondary500' : 'neutral800'}>
              편집
            </Text>
          </CardSectionEditButton>

          {Object.keys(sortedTransactionData).length !== 0 ? (
            Object.keys(sortedTransactionData).map((key) => (
              <MonthSection key={key}>
                <Text as="t3">{key.replace(/-/g, '. ')}</Text>
                {sortedTransactionData[key].map((item) => (
                  <BudgetCard
                    key={item.id}
                    isEdit={isEdit}
                    onClick={() => router.push(`/collection/budget/${item.id}`)}
                    onClickClose={(e) => onClickDelete(e, item.id!)}
                    data={item}
                  />
                ))}
              </MonthSection>
            ))
          ) : (
            <EmptyCardSection
              onClick={() => router.push('/collection/budget/create')}
            >
              <EmptyCardTitle>
                <Text as="t2" color="neutral500">
                  예산을 추가해보세요
                </Text>
                <Icon name="plus" color="neutral500" />
              </EmptyCardTitle>
            </EmptyCardSection>
          )}
        </CardSection>

        <FloatingButton
          icon="plus"
          onClick={() => router.push('/collection/budget/create')}
        />
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
  border-radius: 2.2rem;
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

const EditModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-top: 2rem;
  background-color: ${({ theme }) => theme.color.neutral0};
`

const BudgetInput = styled.input`
  padding: 1rem;
  margin-top: 1rem;
  font-size: 1.6rem;
  font-weight: 700;
  text-align: center;
  border: none;
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.6rem;
`

const EmptyCardSection = styled.div`
  position: absolute;
  top: 3rem;
  width: 100%;
  height: 8rem;
  border: 1px solid ${({ theme }) => theme.color.neutral300};
  border-radius: 1rem;
`

const EmptyCardTitle = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  height: 100%;
`
