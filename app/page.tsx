'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import styled from 'styled-components'

const Page = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('/splash')
  }, [])
  return (
    <Layout>
      <p>home</p>
    </Layout>
  )
}

export default Page

const Layout = styled.div`
  background-color: #eee;
`
