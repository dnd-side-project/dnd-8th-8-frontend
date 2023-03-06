import axios from 'axios'

interface Contract {
  id: number
  title: string
  contents: string
  contractDate: string
  contractStatus: 'COMPLETE' | 'IN_PROGRESS' | 'VERBAL' | 'PROVISIONAL'
  file: string
  memo: string
}

type ContractData = Pick<
  Contract,
  'id' | 'title' | 'contractDate' | 'contractStatus'
>

export const getContract = async (
  contractId: number,
  accessToken: string,
): Promise<Contract> => {
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  }

  const response = await axios.get<Contract>(
    `/api/v1/contract/${contractId}`,
    config,
  )

  return response.data
}

export const searchContracts = async (
  accessToken: string,
): Promise<Contract[]> => {
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  }

  const response = await axios.get<Contract[]>('/api/v1/contract', config)

  return response.data
}

export const registerContract = async (
  contractData: ContractData,
  file: File,
  accessToken: string,
): Promise<Contract> => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('data', JSON.stringify(contractData))

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'multipart/form-data',
    },
  }

  const response = await axios.post<Contract>(
    '/api/v1/contract',
    formData,
    config,
  )

  return response.data
}

export const editContractFile = async (
  contractId: number,
  file: File,
  accessToken: string,
): Promise<Contract> => {
  const formData = new FormData()
  formData.append('file', file)

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'multipart/form-data',
    },
  }

  const response = await axios.post<Contract>(
    `/api/v1/contract/${contractId}`,
    formData,
    config,
  )

  return response.data
}

export const editContract = async (
  contractId: number,
  contractData: ContractData,
  accessToken: string,
): Promise<Contract> => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  }

  const response = await axios.put<Contract>(
    `/api/v1/contract/${contractId}`,
    contractData,
    config,
  )

  return response.data
}

export const deleteContract = async (
  contractId: number,
  accessToken: string,
): Promise<void> => {
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  }

  await axios.delete(`/api/v1/contract/${contractId}`, config)
}
