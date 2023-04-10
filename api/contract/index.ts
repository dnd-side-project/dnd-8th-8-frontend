import { BaseResponse } from '@/types/api/base'
import { ContractListResponse, ContractResponse } from '@/types/api/contract'
import { AxiosResponse } from 'axios'
import axiosInstance from '../config/axiosInstance'

// 계약서 리스트
export const getContractList = async () => {
  const { data }: AxiosResponse<ContractListResponse> = await axiosInstance.get(
    '/api/v1/contract',
  )
  return data
}

// 계약서 생성
export const createContract = async (payload: FormData) => {
  const { data }: AxiosResponse<ContractResponse> = await axiosInstance.post(
    '/api/v1/contract',
    payload,
    {
      headers: {
        'Content-Type': `multipart/form-data`,
      },
    },
  )
  return data
}

// 선택된 계약서 정보 가져오기
export const getSelectedContractInfo = async (id: number) => {
  const { data }: AxiosResponse<ContractResponse> = await axiosInstance.get(
    `/api/v1/contract/${id}`,
  )
  return data
}

// 계약서 삭제
export const deleteContract = async (id: number) => {
  const { data }: AxiosResponse<BaseResponse> = await axiosInstance.delete(
    `/api/v1/contract/${id}`,
  )
  return data
}
