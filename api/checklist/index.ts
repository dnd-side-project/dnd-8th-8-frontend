import axios from 'axios'

const API_URL = `${
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'
}/api/v1/checklist`

interface ChecklistItem {
  id: number
  title: string
  checkDate: string
  startTime: string
  endTime: string
  place: string
  memo: string
}

interface ChecklistSubItem {
  id: number
  contents: string
  isChecked: boolean
}

interface ChecklistResponse {
  checklistItem: ChecklistItem
  checklistSubItems: ChecklistSubItem[]
}

export const getChecklist = async (accessToken: string) => {
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  }
  const response = await axios.get<ChecklistResponse[]>(`${API_URL}`, config)
  return response.data
}

interface PreChecklistRequest {
  preChecklistItems: string[]
}

interface PreChecklistItem {
  id: number
  title: string
}

export const preRegisterChecklist = async (
  preChecklistItems: string[],
  accessToken: string,
) => {
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  }
  const data: PreChecklistRequest = { preChecklistItems }
  const response = await axios.post<PreChecklistItem[]>(
    `${API_URL}/pre-check`,
    data,
    config,
  )
  return response.data
}
