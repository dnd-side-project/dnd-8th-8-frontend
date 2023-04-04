import { getChecklist } from '@/api/checklist'
import { QUERY_KEYS } from '@/constant'
import { useQuery } from '@tanstack/react-query'

export const useGetChecklist = (subItem: boolean) => {
  return useQuery([QUERY_KEYS.CHECKLIST], () => getChecklist(subItem))
}
