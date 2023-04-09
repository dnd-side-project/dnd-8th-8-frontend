import { deleteTransaction } from '@/api/transaction'
import { QUERY_KEYS } from '@/constant'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useDeletesTransaction = () => {
  const queryClient = useQueryClient()
  return useMutation((id: number) => deleteTransaction(id), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.TRANSACTION.GET_TRANSACTION])
    },
  })
}
