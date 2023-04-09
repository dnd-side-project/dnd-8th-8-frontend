import { Badge, Icon, Text } from '@/components'
import { TransactionResp } from '@/types/api/transaction'
import { getCurrencyFormat } from '@/utils'
import styled from 'styled-components'

interface BudgetCardProps {
  data: TransactionResp
  isEdit: boolean
  onClick: () => void
  onClickClose: (e: MouseEvent, id: number) => void
}

const BudgetCard = ({
  isEdit,
  onClick,
  onClickClose,
  data,
}: BudgetCardProps) => {
  return (
    <Layout onClick={onClick}>
      <LeftSection>
        <Text as="h3">
          {data.transactionDate.substring(8, 10).replace(/^0+/, '')}일
        </Text>
      </LeftSection>
      <CenterSection>
        <Badge backgroundColor="secondary100" color="secondary400">
          {data.paymentType === 'CARD' ? '카드 결제' : '현금 결제'}
        </Badge>

        <Text as="t3">{data.title}</Text>
      </CenterSection>
      <RightSection>
        <RightSectionText>
          <Text as="t5" color="secondary400">
            {data.agency}
          </Text>
          <Text as="h5">{`${getCurrencyFormat(Number(data.payment))}원`}</Text>
        </RightSectionText>

        {isEdit && (
          <TrashButton onClick={onClickClose}>
            <Icon name="trash" />
          </TrashButton>
        )}
      </RightSection>
    </Layout>
  )
}

export default BudgetCard

const Layout = styled.div`
  display: flex;
  align-items: center;
  height: 8rem;
  padding: 1.2rem;
  background-color: ${({ theme }) => theme.color.secondary0};
  border-radius: 1rem;
`

const LeftSection = styled.div`
  width: 5rem;
  margin-right: 1.2rem;
`

const CenterSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 0.5rem;
  margin-right: 1.2rem;
`

const RightSection = styled.div`
  display: flex;
  align-items: center;
`

const RightSectionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: right;
`

const TrashButton = styled.button`
  padding-left: 1.2rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
`
