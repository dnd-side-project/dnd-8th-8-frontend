import axios, { isAxiosError } from 'axios'

const API_URL = `${
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'
}/api/v1/wedding`

interface WeddingRegistrationRequest {
  weddingDay: string
  preparing: boolean
}

interface WeddingModificationRequest {
  weddingDay: string
  preparing: boolean
}

interface WeddingBudgetResponse {
  budget: number
}

export const registerWedding = async (
  weddingDay: string,
  preparing: boolean,
  accessToken: string,
) => {
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  }
  const data: WeddingRegistrationRequest = { weddingDay, preparing }
  const response = await axios.post(`${API_URL}`, data, config)
  return response.data
}

export const getWeddingDate = async (accessToken: string) => {
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  }
  try {
    const response = await axios.get(`${API_URL}/day`, config)
    return response.data
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data
    } else {
      throw error
    }
  }
}

export const updateWeddingDate = async (
  weddingDay: string,
  preparing: boolean,
  accessToken: string,
) => {
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  }
  const data: WeddingModificationRequest = { weddingDay, preparing }
  const response = await axios.put(`${API_URL}/day`, data, config)
  return response.data
}

export const getWeddingBudget = async (accessToken: string) => {
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  }
  const response = await axios.get<WeddingBudgetResponse>(
    `${API_URL}/budget`,
    config,
  )
  return response.data.budget
}

export const updateWeddingBudget = async (
  budget: number,
  accessToken: string,
) => {
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  }
  const data: WeddingBudgetResponse = { budget }
  const response = await axios.put(`${API_URL}/budget`, data, config)
  return response.data
}
