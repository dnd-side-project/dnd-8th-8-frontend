import { createContract } from '@/api/contract'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export const useCreateContract = () => {
  const router = useRouter()
  return useMutation((data: FormData) => createContract(data), {
    onSuccess: () => router.push('/collection/contract'),
  })
}
