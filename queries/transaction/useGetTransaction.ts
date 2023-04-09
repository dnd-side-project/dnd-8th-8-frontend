import { getTransaction } from '@/api/transaction'
import { QUERY_KEYS } from '@/constant'
import { useQuery } from '@tanstack/react-query'

export const useGetTransaction = (id: number) => {
  return useQuery([QUERY_KEYS.TRANSACTION.GET_TRANSACTION, id], () =>
    getTransaction(id),
  )
}
