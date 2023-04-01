import { getMarriageStatus } from '@/api/user'
import { QUERY_KEYS } from '@/constant'
import { useMutation } from '@tanstack/react-query'

export const useGetMarriageStatus = () => {
  return useMutation([QUERY_KEYS.USER.GET_MARRIAGE_STATUS], getMarriageStatus, {
    onSuccess: (data) => {
      return data.data
    },
  })
}
