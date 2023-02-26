import { Badge, Text } from '@/components'
import { getCurrencyFormat } from '@/utils'
import styled from 'styled-components'

const BudgetCard = () => {
  return (
    <Layout>
      <LeftSection>
        <Text as="h3">7일</Text>
      </LeftSection>
      <CenterSection>
        <Badge backgroundColor="secondary300" color="secondary500">
          카드 결제
        </Badge>

        <Text as="t3">스튜디오 촬영 예약</Text>
      </CenterSection>
      <RightSection>
        <Text as="t5" color="secondary400">
          청담동 아끌레어
        </Text>
        <Text as="h5">{`${getCurrencyFormat(-200000)}원`}</Text>
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
`

const LeftSection = styled.div`
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
  flex-direction: column;
  gap: 1rem;
`
