import { BaseResponse } from '@/types/api/base'
import {
  Transaction,
  TransactionListResponse,
  TransactionResponse,
} from '@/types/api/transaction'
import { AxiosResponse } from 'axios'
import axiosInstance from '../config/axiosInstance'

// 거래 내역 리스트
export const getTransactionList = async () => {
  const { data }: AxiosResponse<TransactionListResponse> =
    await axiosInstance.get('/api/v1/transaction')
  return data
}

// 거래 내역 상세 조회
export const getTransaction = async (id: number) => {
  const { data }: AxiosResponse<TransactionResponse> = await axiosInstance.get(
    `/api/v1/transaction/${id}`,
  )
  return data
}

// 거래 내역 생성
export const createTransaction = async (payload: Transaction) => {
  const { data }: AxiosResponse<TransactionResponse> = await axiosInstance.post(
    '/api/v1/transaction',
    payload,
  )
  return data
}

// 거래 내역 수정
export const updateTransaction = async (id: number, payload: Transaction) => {
  const { data }: AxiosResponse<TransactionResponse> = await axiosInstance.put(
    `/api/v1/transaction/${id}`,
    payload,
    {
      headers: {
        'Content-Type': `multipart/form-data`,
      },
    },
  )
  return data
}

// 거래 내역 삭제
export const deleteTransaction = async (id: number) => {
  const { data }: AxiosResponse<BaseResponse> = await axiosInstance.delete(
    `/api/v1/transaction/${id}`,
  )
  return data
}
