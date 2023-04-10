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
  data: Omit<ContractItemType, 'contents' | 'file' | 'memo'>[]
}

export interface ContractResponse extends BaseResponse {
  data: ContractItemType
}
