import { BaseResponse } from '../base'

export type ContractStatusType =
  | 'COMPLETE'
  | 'IN_PROGRESS'
  | 'VERBAL'
  | 'PROVISIONAL'

export interface ContractItemType {
  id: number
  title: string
  contractDate: string
  contractStatus: ContractStatusType | ''
  contents: string
  file: string
  memo: string
}

export interface ContractListResponse extends BaseResponse {
  data: Omit<ContractItemType, 'contents' | 'file' | 'demo'>[]
}

export interface CreateContractResponse extends BaseResponse {
  data: ContractItemType
}