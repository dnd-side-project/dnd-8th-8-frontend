'use client'

import { FloatingButton, Input, Tab } from '@/components'
import styled from 'styled-components'
import ContractCard from './components/contractCard'

const Contract = () => {
  const tabs = [
    { label: '예산표', path: '/collection/budget' },
    { label: '계약서', path: '/collection/contract' },
  ]

  return (
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
          <ContractCard cardTheme="normal" />
        </CardSection>
        <FloatingButton icon={'plus'} onClick={() => console.log('click')} />
      </Layout>
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
