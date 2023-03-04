'use client'

import axios from 'axios'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import styled from 'styled-components'

const AuthCallback = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  useEffect(() => {
    const code = searchParams.get('code')
    if (code === null || code === '') {
      router.push('/login')
    } else {
      axios.defaults.headers.common['Authorization'] = `Bearer ${code}`
      router.push('/onboarding/wedding-status')
    }
  }, [])

  return (
    <Layout>
      <Image
        alt="loading spinner"
        src="/images/loading-spinner.svg"
        width={150}
        height={150}
        priority
      />
    </Layout>
  )
}

export default AuthCallback

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`
