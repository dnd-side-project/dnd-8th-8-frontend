'use client'

import { DDayBadge, FloatingButton, Text } from '@/components'
import { ChecklistCard } from '@/layouts/checklist'
import { useGetChecklist } from '@/queries/checklist/useGetChecklist'
import { Checklist } from '@/types/api/checklist'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Checklist = () => {
  const router = useRouter()
  const [checklist, setChecklist] = useState<Checklist[]>([])
  const { data: checklistData } = useGetChecklist(true)

  useEffect(() => {
    if (checklistData) {
      setChecklist(checklistData.data)
    }
  }, [checklistData])

  const checklistDataSortByDate = () => {
    interface SortedData {
      [key: string]: Checklist[]
    }
    const sortedData: SortedData = {}

    checklist.forEach((item) => {
      const yyyymm = item.checklistItem.checkDate
        ? item.checklistItem.checkDate.slice(0, 7)
        : '날짜 미정'
      sortedData[yyyymm]
        ? sortedData[yyyymm].push(item)
        : (sortedData[yyyymm] = [item])
    })

    return sortedData
  }

  const sortedData = checklistDataSortByDate()

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
        {Object.keys(sortedData).map((key) => (
          <div key={key}>
            <Text as="t3">{key}</Text>
            {sortedData[key].map((item) => (
              <ChecklistCard key={item.checklistItem.id} checklist={item} />
            ))}
          </div>
        ))}
      </ContentSection>

      <FloatingButton
        icon="plus"
        onClick={() => router.push('/checklist/create')}
      />
    </Layout>
  )
}

export default Checklist

const Layout = styled.div`
  padding: 2rem;
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
