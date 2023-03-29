'use client'

import { FloatingButton, Input, Tab } from '@/components'
import { useGetContractList } from '@/queries/contract/useGetContract'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import ContractCard from './components/contractCard'

const Contract = () => {
  const tabs = [
    { label: '예산표', path: '/collection/budget' },
    { label: '계약서', path: '/collection/contract' },
  ]
  const router = useRouter()
  const { data, isLoading } = useGetContractList()

  return (
    <>
      {isLoading ? (
        <LoadingSection>
          <Image
            alt="loading spinner"
            src="/images/loading-spinner.svg"
            width={150}
            height={150}
            priority
          />
        </LoadingSection>
      ) : (
        <>
          <Tab tabs={tabs} />
          <Layout>
            <Input
              placeholder="검색어를 입력해주세요."
              handleChange={(e) => console.log(e.currentTarget.value)}
              searchIcon
              borderStyle
            />
            <CardSection>
              {data?.data.length ? (
                data.data.map((item) => (
                  <ContractCard
                    cardTheme="normal"
                    contractInfo={item}
                    key={item.id}
                  />
                ))
              ) : (
                <ContractCard cardTheme="skeleton" />
              )}
            </CardSection>
            <FloatingButton
              icon={'plus'}
              onClick={() => router.push('/collection/contract/create')}
            />
          </Layout>
        </>
      )}
    </>
  )
}

export default Contract

const Layout = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.5rem 2rem;
`

const CardSection = styled.div`
  row-gap: 1rem;
  margin-top: 2rem;
`
const LoadingSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`
