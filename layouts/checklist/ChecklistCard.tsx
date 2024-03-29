import { Icon, Menu, Text } from '@/components'
import { Checklist } from '@/types/api/checklist'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styled, { Color } from 'styled-components'

interface ChecklistCardProps {
  checklist: Checklist
}

interface ChecklistSubItem {
  id: number
  contents: string
  isChecked: string
}

const ChecklistCard = ({ checklist }: ChecklistCardProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const handleCheck = () => {
    setIsChecked(!isChecked)
  }

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <CardHeader isChecked={isChecked} onClick={handleOpen}>
        <LeftSection>
          {isChecked ? (
            <Icon name="checkbox" size={20} color="neutral100" />
          ) : (
            <Circle color="secondary400" />
          )}
        </LeftSection>

        <CenterSection
          onClick={(e) => {
            e.stopPropagation()
            router.push(`/checklist/${checklist.checklistItem.id}`)
          }}
        >
          <CenterSectionDate>
            <Text as="h4" color={isChecked ? 'neutral100' : 'neutral800'}>
              {checklist.checklistItem.checkDate
                ? checklist.checklistItem.checkDate.slice(0, 7)
                : '⚙️'}
            </Text>
          </CenterSectionDate>

          <CenterSectionTitle>
            <Text as="h4" color={isChecked ? 'neutral100' : 'neutral800'}>
              {checklist.checklistItem.title}
            </Text>
          </CenterSectionTitle>

          <CenterSectionCount>
            <Text as="t3" color={isChecked ? 'neutral100' : 'neutral800'}>
              {checklist.checklistSubItems.length}개
            </Text>
          </CenterSectionCount>
        </CenterSection>

        <RightSection>
          <Icon
            name={isOpen ? 'chevron-up' : 'chevron-down'}
            color={isChecked ? 'neutral100' : 'secondary400'}
          />
        </RightSection>
      </CardHeader>

      {isOpen && (
        <CardBody>
          {checklist.checklistSubItems.map((item) => (
            <CardItem key={item.id}>
              <CardItemLeftSection onClick={handleCheck}>
                {item.isChecked ? (
                  <Icon name="checkbox" size={20} color="secondary500" />
                ) : (
                  <Circle color="secondary400" />
                )}
              </CardItemLeftSection>
              <CardItemCenterSection onClick={handleCheck}>
                <Text as="t3">{item.contents}</Text>
              </CardItemCenterSection>
              <CardItemRightSection onClick={handleMenu}>
                <Icon name="more-horizontal" color="neutral300" />
                {isMenuOpen && (
                  <Menu
                    items={[
                      { label: '수정', onClick: () => null },
                      { label: '삭제', onClick: () => null },
                    ]}
                  />
                )}
              </CardItemRightSection>
            </CardItem>
          ))}

          <CardAddButton>
            <Icon name="plus" color="neutral500" size={12} />
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
  margin-bottom: 1rem;
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
  margin-top: calc(-6.5rem - 1rem);
  margin-bottom: 1rem;
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
  height: 2.4rem;
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
