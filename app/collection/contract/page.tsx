'use client'

import { Tab } from '@/components'
import styled from 'styled-components'

const Contract = () => {
  const tabs = [
    { label: '예산표', path: '/collection/budget' },
    { label: '계약서', path: '/collection/contract' },
  ]

  return (
    <>
      <Tab tabs={tabs} />

      <Layout>
        <h1>나는 계약서이다</h1>
      </Layout>
    </>
  )
}

export default Contract

const Layout = styled.div``
