import { BudgetResponse } from '@/types/api/transaction'
import { AxiosResponse } from 'axios'
import axiosInstance from '../config/axiosInstance'

export const getBudget = async () => {
  const { data }: AxiosResponse<BudgetResponse> = await axiosInstance.get(
    '/api/v1/budget',
  )
  return data
}
