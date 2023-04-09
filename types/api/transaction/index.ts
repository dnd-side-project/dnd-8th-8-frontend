type PaymentType = 'CARD' | 'CASH'

export interface Transaction {
  id?: number
  title: string
  agency: string
  transactionDate: string
  payment: string
  paymentType: PaymentType
  balance?: string
  accountHolder?: string
  accountNumber?: string
  memo?: string
}

export interface TransactionListResponse {
  status: number
  data: Omit<
    Transaction,
    'balance' | 'accountHolder' | 'accountNumber' | 'memo'
  >[]
}

export interface TransactionResponse {
  status: number
  message?: string
  data: Transaction
}

export interface BudgetResponse {
  status: number
  data: {
    budget: number
  }
}
