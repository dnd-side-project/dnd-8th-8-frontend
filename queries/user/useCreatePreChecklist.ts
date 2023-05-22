import { createPreChecklist } from '@/api/checklist/'
import { PreChecklistType } from '@/types/checklist'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export const useCreatePreChecklist = () => {
  const router = useRouter()
  return useMutation((data: PreChecklistType[]) => createPreChecklist(data), {
    onSuccess: () => router.push('/checklist'),
  })
}
