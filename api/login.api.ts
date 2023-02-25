import axiosInstance from './config/axiosInstance'

export const kakaoLoginApi = async () => {
  const res = await axiosInstance.get(
    `/oauth2/authorization/kakao?redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}`,
  )
  return res
}
