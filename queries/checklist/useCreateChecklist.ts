import { createChecklist } from '@/api/checklist'
import { Checklist } from '@/types/api/checklist'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export const useCreateChecklist = () => {
  const router = useRouter()
  return useMutation((data: Checklist) => createChecklist(data), {
    onSuccess: () => router.push('/checklist'),
  })
}
