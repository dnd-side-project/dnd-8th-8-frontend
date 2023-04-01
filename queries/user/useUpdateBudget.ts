import { updateBudget } from '@/api/user'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export const useUpdateBudget = () => {
  const router = useRouter()
  return useMutation((amount: number) => updateBudget(amount), {
    onSuccess: () => router.push('/onboarding/checklist'),
  })
}
