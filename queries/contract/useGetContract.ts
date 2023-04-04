import { getContractList } from '@/api/contract'
import { QUERY_KEYS } from '@/constant'
import { useQuery } from '@tanstack/react-query'

export const useGetContractList = () => {
  return useQuery([QUERY_KEYS.CONTRACT.GET_CONTRACTLIST], getContractList)
}
