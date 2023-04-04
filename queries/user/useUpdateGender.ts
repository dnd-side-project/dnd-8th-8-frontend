import { updateGender } from '@/api/user'
import { genderType } from '@/types/user'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export const useUpdateGender = () => {
  const router = useRouter()
  return useMutation((data: genderType) => updateGender(data), {
    onSuccess: () => router.push('/onboarding/budget'),
  })
}
