import { getBudget } from '@/api/budget'
import { QUERY_KEYS } from '@/constant'
import { useQuery } from '@tanstack/react-query'

export const useGetBudget = () => {
  return useQuery([QUERY_KEYS.BUDGET.GET_BUDGET], getBudget)
}
