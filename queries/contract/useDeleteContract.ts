import { deleteContract } from '@/api/contract'
import { QUERY_KEYS } from '@/constant'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useDeleteContract = () => {
  const queryClient = useQueryClient()
  return useMutation((id: number) => deleteContract(id), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.CONTRACT.GET_CONTRACTLIST])
    },
  })
}
