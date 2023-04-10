import { getSelectedContractInfo } from '@/api/contract'
import { QUERY_KEYS } from '@/constant'
import { useQuery } from '@tanstack/react-query'

export const useGetContractList = (id: number) => {
  return useQuery([QUERY_KEYS.CONTRACT.GET_SELECTED_CONTRACT], () =>
    getSelectedContractInfo(id),
  )
}
