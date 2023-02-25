import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
})

axiosInstance.interceptors.request.use(
  function (config) {
    // 요청이 전달되기 전에 작업 수행
    return config
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error)
  },
)

export default axiosInstance
