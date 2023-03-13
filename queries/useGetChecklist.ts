import { getChecklist } from '@/api/checklist'
import { QUERY_KEYS } from '@/constant'
import { useQuery } from '@tanstack/react-query'

export const useGetChecklist = () => {
  return useQuery([QUERY_KEYS.CHECKLIST], getChecklist)
}
