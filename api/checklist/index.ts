import { Checklist, ChecklistResponse } from '@/types/api/checklist'
import { AxiosResponse } from 'axios'
import axiosInstance from '../config/axiosInstance'

export const getChecklist = async (subItem: boolean) => {
  const { data }: AxiosResponse<ChecklistResponse> = await axiosInstance.get(
    `/api/v1/checklist?subitem=${subItem}`,
  )
  return data
}

export const createChecklist = async (payload: Checklist) => {
  const { data }: AxiosResponse<ChecklistResponse> = await axiosInstance.post(
    `/api/v1/checklist/item`,
    payload,
  )
  return data
}
