import { ChecklistResponse } from '@/types/api/transaction'
import { AxiosResponse } from 'axios'
import axiosInstance from '../config/axiosInstance'

export const getChecklist = async (subItem: boolean) => {
  const { data }: AxiosResponse<ChecklistResponse> = await axiosInstance.get(
    `/api/v1/checklist?subitem=${subItem}`,
  )
  return data
}
