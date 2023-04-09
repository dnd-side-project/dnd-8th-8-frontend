import { createTransaction } from '@/api/transaction'
import { Transaction } from '@/types/api/transaction'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export const useCreateTransaction = () => {
  const router = useRouter()
  return useMutation((data: Transaction) => createTransaction(data), {
    onSuccess: () => router.push('/collection/budget'),
  })
}
