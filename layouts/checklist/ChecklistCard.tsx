import { Icon, Text } from '@/components'
import { useState } from 'react'
import styled, { Color } from 'styled-components'

const ChecklistCard = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const handleCheck = () => {
    setIsChecked(!isChecked)
  }

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <CardHeader isChecked={isChecked} onClick={handleOpen}>
        <LeftSection>
          {isChecked ? (
            <Icon as="checkbox" size={20} color="neutral100" />
          ) : (
            <Circle color="secondary400" />
          )}
        </LeftSection>

        <CenterSection>
          <CenterSectionDate>
            <Text as="h4" color={isChecked ? 'neutral100' : 'neutral800'}>
              7일
            </Text>
          </CenterSectionDate>

          <CenterSectionTitle>
            <Text as="h4" color={isChecked ? 'neutral100' : 'neutral800'}>
              결혼 반지 맞추기
            </Text>
          </CenterSectionTitle>

          <CenterSectionCount>
            <Text as="t3" color={isChecked ? 'neutral100' : 'neutral800'}>
              2개
            </Text>
          </CenterSectionCount>
        </CenterSection>

        <RightSection>
          <Icon
            as={isOpen ? 'chevron-up' : 'chevron-down'}
            color={isChecked ? 'neutral100' : 'secondary400'}
          />
        </RightSection>
      </CardHeader>

      {isOpen && (
        <CardBody>
          <CardItem onClick={handleCheck}>
            <CardItemLeftSection>
              {isChecked ? (
                <Icon as="checkbox" size={20} color="secondary500" />
              ) : (
                <Circle color="secondary400" />
              )}
            </CardItemLeftSection>
            <CardItemCenterSection>
              <Text as="t3">장수 확인</Text>
            </CardItemCenterSection>
            <CardItemRightSection>
              <Icon as="more-horizontal" color="neutral300" />
            </CardItemRightSection>
          </CardItem>

          <CardItem onClick={handleCheck}>
            <CardItemLeftSection>
              {isChecked ? (
                <Icon as="checkbox" size={20} color="secondary500" />
              ) : (
                <Circle color="secondary400" />
              )}
            </CardItemLeftSection>
            <CardItemCenterSection>
              <Text as="t3">견적 확인</Text>
            </CardItemCenterSection>
            <CardItemRightSection>
              <Icon as="more-horizontal" color="neutral300" />
            </CardItemRightSection>
          </CardItem>

          <CardItem>
            <CardItemLeftSection>
              <Circle color="neutral500" />
            </CardItemLeftSection>
            <CardItemCenterSection>
              <Text as="t3" color="neutral400">
                입력
              </Text>
            </CardItemCenterSection>
          </CardItem>

          <CardAddButton>
            <Icon as="plus" color="neutral500" size={12} />
            <Text as="t4" color="neutral500">
              항목 추가
            </Text>
          </CardAddButton>
        </CardBody>
      )}
    </>
  )
}

export default ChecklistCard

const CardHeader = styled.div<{
  isChecked: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 6.5rem;
  cursor: pointer;
  background-color: ${({ theme, isChecked }) =>
    isChecked ? theme.color.secondary500 : theme.color.secondary0};
  border-radius: 0.8rem;
`

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 1.2rem 2rem 1.6rem;
`
const RightSection = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 1.2rem;
`

const CenterSection = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
`

const CenterSectionDate = styled.div`
  margin-right: 1.6rem;
`

const CenterSectionTitle = styled.div`
  margin-right: 1.2rem;
`

const CenterSectionCount = styled.div``

const Circle = styled.div<{
  color: keyof Color
}>`
  width: 2rem;
  height: 2rem;
  border: 1px solid ${({ theme, color }) => theme.color[color]};
  border-radius: 50%;
`

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: calc(6.5rem + 1.6rem) 2rem 1.6rem 2rem;
  margin-top: -6.5rem;
  border-radius: 10px;
  box-shadow: 0 1px 7px rgb(0 0 0 / 15%);
`
const CardItem = styled.div`
  display: flex;
  gap: 1.4rem;
  align-items: center;
  justify-content: space-between;
`

const CardItemLeftSection = styled.div`
  cursor: pointer;
`
const CardItemCenterSection = styled.div`
  width: 100%;
`
const CardItemRightSection = styled.div`
  cursor: pointer;
`

const CardAddButton = styled.button`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: -0.4rem;
  margin-left: calc(5.2rem - 2rem);
  cursor: pointer;
  background-color: transparent;
  border: none;
`
