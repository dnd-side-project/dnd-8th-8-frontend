import { marriageType } from '@/types/api/user'
import { genderType } from '@/types/user'
import axios, { isAxiosError } from 'axios'
import axiosInstance from '../config/axiosInstance'

const API_URL = `${
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'
}/api/v1/user`

interface UpdateNameRequest {
  name: string
}

export const updateUserName = async (name: string, accessToken: string) => {
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  }
  const data: UpdateNameRequest = { name }
  const response = await axios.put(`${API_URL}/name`, data, config)
  return response.data
}

export const deleteUser = async (accessToken: string) => {
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  }
  const response = await axios.delete(API_URL, config)
  return response.data
}

export const getGender = async (accessToken: string) => {
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  }
  try {
    const response = await axios.get(`${API_URL}/gender`, config)
    return response.data
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data
    } else {
      throw error
    }
  }
}

export const getProfileImage = async (accessToken: string) => {
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  }
  const response = await axios.get(`${API_URL}/profile`, config)
  return response.data
}

export const updateProfileImage = async (image: File, accessToken: string) => {
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
      Authorization: `Bearer ${accessToken}`,
    },
  }
  const formData = new FormData()
  formData.append('image', image)
  const response = await axios.post(`${API_URL}/profile`, formData, config)
  return response.data
}

// 결혼 등록 API (POST)
export const createMarriageStatus = (data: marriageType) => {
  return axiosInstance.post('/api/v1/wedding', data)
}

// 결혼일 조회 API (GET)
export const getMarriageStatus = () => {
  return axiosInstance.get('/api/v1/wedding/day')
}

// 성별정보 업데이트 API (POST)
export const updateGender = (data: genderType) => {
  return axiosInstance.post('/api/v1/user/gender', { gender: data })
}

// 예산 등록 API (PUT)
export const updateBudget = (amount: number) => {
  return axiosInstance.put('/api/v1/wedding/budget', { budget: amount })
}
