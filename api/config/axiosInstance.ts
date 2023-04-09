import axios from 'axios'

const token = ''

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': `application/json;charset=UTF-8`,
    Accept: 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    Authorization: `Bearer ${token}`,
    withCredentials: true,
  },
})

axiosInstance.interceptors.request.use(
  (config) => {
    if (!config.headers.Authorization) {
      // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }

    return config
  },
  (error) => Promise.reject(error),
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const {
      response: { status },
    } = error
    if (status === 401) {
      //토큰 재발급
    }

    return Promise.reject(error)
  },
)

export default axiosInstance
