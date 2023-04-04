import { createPreChecklist, preChecklistType } from '@/api/checklist'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export const useCreatePreChecklist = () => {
  const router = useRouter()
  return useMutation((data: preChecklistType) => createPreChecklist(data), {
    onSuccess: () => router.push('/home'),
  })
}
