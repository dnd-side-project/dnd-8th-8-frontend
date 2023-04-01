import { createMarriageStatus } from '@/api/user'
import { marriageType } from '@/types/api/user'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export const useCreateMarriageStatus = () => {
  const router = useRouter()
  return useMutation((data: marriageType) => createMarriageStatus(data), {
    onSuccess: () => router.push('/onboarding/gender'),
  })
}
