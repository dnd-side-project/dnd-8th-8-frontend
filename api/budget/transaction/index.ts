import axios from 'axios'

const API_URL = `${
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'
}/api/v1/checklist`

interface Transaction {
  id: number
  title: string
  agency: string
  transactionDate: string
  payment: number
  balance: number
  paymentType: string
  accountHolder?: string
  accountNumber?: string
  memo: string
}

export const getTransactionById = async (
  transactionId: number,
  accessToken: string,
): Promise<Transaction> => {
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  }

  const response = await axios.get<Transaction>(
    `${API_URL}/transaction/${transactionId}`,
    config,
  )

  return response.data
}

export const getAllTransactions = async (
  accessToken: string,
): Promise<Transaction[]> => {
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  }

  const response = await axios.get<Transaction[]>(
    `${API_URL}/transaction`,
    config,
  )

  return response.data
}

export const registerTransaction = async (
  transaction: Transaction,
  accessToken: string,
): Promise<Transaction> => {
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  }

  const response = await axios.post<Transaction>(
    `${API_URL}/transaction`,
    transaction,
    config,
  )

  return response.data
}

export const updateTransaction = async (
  transactionId: number,
  transaction: Transaction,
  accessToken: string,
): Promise<Transaction> => {
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  }

  const response = await axios.put<Transaction>(
    `${API_URL}/transaction/${transactionId}`,
    transaction,
    config,
  )

  return response.data
}

export const deleteTransaction = async (
  transactionId: number,
  accessToken: string,
): Promise<void> => {
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  }

  await axios.delete<void>(`${API_URL}/transaction/${transactionId}`, config)
}
