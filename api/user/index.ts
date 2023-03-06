import axios, { AxiosError } from 'axios'

const API_URL = `${
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'
}/api/v1/user`

interface UpdateNameRequest {
  name: string
}

interface UpdateGenderRequest {
  gender: string
}

function isAxiosError(error: any): error is AxiosError {
  return (error as AxiosError).isAxiosError === true
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

export const updateGender = async (gender: string, accessToken: string) => {
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  }
  const data: UpdateGenderRequest = { gender }
  const response = await axios.post(`${API_URL}/gender`, data, config)
  return response.data
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
