'use client'

import { Header, Text } from '@/components'
import { ParamsProps } from '@/types/param'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'

const DetailChecklist = ({ params: { id } }: ParamsProps) => {
  const router = useRouter()

  return (
    <Layout>
      <Header
        handleBackBtnClick={() => router.push('/checklist')}
        rightBtn={
          <div onClick={() => null}>
            <Text as="t4" color="neutral800">
              편집
            </Text>
          </div>
        }
        title="체크리스트 작성"
      />
    </Layout>
  )
}

export default DetailChecklist

const Layout = styled.div`
  padding: 2rem;
`
