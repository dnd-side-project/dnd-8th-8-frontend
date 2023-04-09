import { getTransactionList } from '@/api/transaction'
import { QUERY_KEYS } from '@/constant'
import { useQuery } from '@tanstack/react-query'

export const useGetTransactionList = () => {
  return useQuery([QUERY_KEYS.TRANSACTION.GET_TRANSACTION], getTransactionList)
}
