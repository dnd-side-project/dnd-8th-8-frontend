'use client'

import { Button, Calendar, Header, Icon, Modal, Text } from '@/components'
import { useCalendar } from '@/hooks'
import { ParamsProps } from '@/types/param'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styled from 'styled-components'

const DetailBudget = ({ params: { id } }: ParamsProps) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dateModal, setDateModal] = useState(false)
  const [typeModal, setTypeModal] = useState(false)
  const [list, setList] = useState({
    company: '',
    date: '',
    payment: '',
    rest: '',
    type: '현금',
  })

  const router = useRouter()

  const {
    month,
    year,
    calendar,
    nextMonth,
    prevMonth,
    handleSelected,
    selected,
  } = useCalendar(new Date())

  const selectedDate = selected.length > 0 ? selected[0].id : null

  const handleDate = () => {
    if (!selectedDate) return

    setList({
      ...list,
      date: selectedDate,
    })
    setDateModal(false)
  }

  const handleTypeModalOpen = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation()

    setTypeModal((prev) => !prev)
  }

  const handleType = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    const type = e.currentTarget.textContent as string

    setList({
      ...list,
      type,
    })
    setTypeModal(false)
  }

  return (
    <Layout>
      <Header handleBackBtnClick={() => router.push(`/collection/budget`)} />

      <TitleInput
        placeholder="제목을 입력해주세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <DescriptionInput
        placeholder="메모할 수 있어요 (최대 20자)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Divider />

      <ListBox>
        <ListItem>
          <ListTitle>
            <Text as="t3" color="secondary500">
              계약 업체
            </Text>
          </ListTitle>
          <ListDescription>
            <ListDescriptionInput
              placeholder="업체를 입력해주세요"
              value={list.company}
              onChange={(e) =>
                setList({
                  ...list,
                  company: e.target.value,
                })
              }
            />
          </ListDescription>
        </ListItem>

        <ListItem>
          <ListTitle>
            <Text as="t3" color="secondary500">
              계약 날짜
            </Text>
          </ListTitle>

          <ListDateButton onClick={() => setDateModal(true)}>
            {list.date ? (
              <Text as="t3">{list.date}</Text>
            ) : (
              <Text as="t3" color="neutral500">
                날짜를 선택해주세요
              </Text>
            )}
          </ListDateButton>

          {dateModal && (
            <Modal isOpen={dateModal} onClose={() => setDateModal(false)}>
              <Calendar
                month={month}
                year={year}
                calendar={calendar}
                nextMonth={nextMonth}
                prevMonth={prevMonth}
                handleSelected={handleSelected}
              />

              <ButtonBox>
                <Button fullWidth onClick={handleDate}>
                  <Text as="t3" color="neutral0">
                    확인
                  </Text>
                </Button>
              </ButtonBox>
            </Modal>
          )}
        </ListItem>

        <ListItem>
          <ListTitle>
            <Text as="t3" color="secondary500">
              계약금
            </Text>
          </ListTitle>
          <ListDescription>
            <ListDescriptionInput
              placeholder="0원"
              value={list.payment}
              onChange={(e) =>
                setList({
                  ...list,
                  payment: e.target.value,
                })
              }
            />
          </ListDescription>
        </ListItem>

        <ListItem>
          <ListTitle>
            <Text as="t3" color="secondary500">
              잔금
            </Text>
          </ListTitle>
          <ListDescription>
            <ListDescriptionInput
              placeholder="원"
              value={list.rest}
              onChange={(e) =>
                setList({
                  ...list,
                  company: e.target.value,
                })
              }
            />
          </ListDescription>
        </ListItem>

        <ListItem>
          <ListTitle>
            <Text as="t3" color="secondary500">
              거래 구분
            </Text>
          </ListTitle>
          <ListTypeButton onClick={handleTypeModalOpen}>
            <Text as="t3">{list.type}</Text>
            <Icon name="chevron-down" />

            {typeModal && (
              <ListTypeModal>
                <ListTypeItem onClick={handleType}>
                  <Text as="t3">현금</Text>
                </ListTypeItem>

                <ListTypeModalDivider />

                <ListTypeItem onClick={handleType}>
                  <Text as="t3">카드</Text>
                </ListTypeItem>
              </ListTypeModal>
            )}
          </ListTypeButton>
        </ListItem>
      </ListBox>

      <BottomButtonBox>
        <Button fullWidth onClick={() => null} backgroundColor="secondary100">
          <Text as="t3">삭제</Text>
        </Button>

        <Button fullWidth onClick={() => null}>
          <Text as="t3" color="neutral0">
            저장
          </Text>
        </Button>
      </BottomButtonBox>
    </Layout>
  )
}

export default DetailBudget

const Layout = styled.div`
  padding: 2rem;
`

const TitleInput = styled.input`
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -0.15rem;
  border: none;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.color.neutral400};
  }
`

const DescriptionInput = styled.input`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1.6rem;
  font-weight: 500;
  letter-spacing: -0.05rem;
  border: none;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.color.neutral400};
  }
`

const Divider = styled.div`
  width: calc(100% + 4rem);
  height: 1px;
  margin-left: -2rem;
  background-color: ${({ theme }) => theme.color.neutral300};
`

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding-top: 2.6rem;
`

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ListTitle = styled.div``

const ListDescription = styled.div``

const ListDescriptionInput = styled.input`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: right;
  letter-spacing: -0.05rem;
  border: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.neutral500};
  }
`

const ListDateButton = styled.button`
  background-color: transparent;
  border: none;
`

const ButtonBox = styled.div`
  margin-top: 1rem;
`

const ListTypeButton = styled.button`
  position: relative;
  display: flex;
  gap: 0.6rem;
  align-items: center;
  background-color: transparent;
  border: none;
`

const ListTypeModal = styled.div`
  position: absolute;
  top: 2.6rem;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  padding: 0.8rem 2rem;
  background: ${({ theme }) => theme.color.neutral0};
  border: 1px solid ${({ theme }) => theme.color.secondary100};
  border-radius: 0.8rem;
  box-shadow: 6px 4px 18px 3px rgb(0 0 0 / 11%);
`

const ListTypeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ListTypeModalDivider = styled.div`
  width: calc(100% + 4rem);
  height: 1px;
  margin: 0.8rem 0;
  background-color: ${({ theme }) => theme.color.secondary100};
`

const BottomButtonBox = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  display: flex;
  gap: 1rem;
  width: calc(100% - 4rem);
  margin-top: 2.6rem;
`
