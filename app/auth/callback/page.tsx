'use client'

import axios from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

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
  // TODO: Loading UI 만들기
  return <div>Auth Callback page</div>
}

export default AuthCallback
