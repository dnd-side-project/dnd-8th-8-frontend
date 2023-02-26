'use client'

import { DDayBadge, FloatingButton, Text } from '@/components'
import { ChecklistCard } from '@/layouts/checklist'
import styled from 'styled-components'

const Checklist = () => {
  return (
    <Layout>
      <HeaderSection>
        <HeaderTitleSection>
          <Text as="h2">체크리스트</Text>
          <DDayBadge day={7} />
        </HeaderTitleSection>
        <HeaderDescSection>
          <div>
            <Text as="t3">{`배우자와 함께\n`}</Text>
            <Text as="t3" color="secondary500">
              체크리스트
            </Text>
            <Text as="t3">를 완성해보세요.</Text>
          </div>

          <HeaderEditButton>
            <Text as="t4" color="neutral800">
              편집
            </Text>
          </HeaderEditButton>
        </HeaderDescSection>
      </HeaderSection>

      <ContentSection>
        <Text as="t3">2023. 03</Text>
        <ChecklistCard />
        <ChecklistCard />
        <ChecklistCard />
      </ContentSection>

      <FloatingButton icon="pencil" onClick={() => null} />
    </Layout>
  )
}

export default Checklist

const Layout = styled.div`
  margin: 2rem;
`

const HeaderSection = styled.div``

const HeaderTitleSection = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
`

const HeaderDescSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`
const HeaderEditButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border: none;
`

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
