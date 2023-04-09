interface ChecklistSubItem {
  id: number
  contents: string
  isChecked: string
}

export interface Checklist {
  id: number
  title: string
  checkDate?: string
  startTime?: string
  endTime?: string
  place?: string
  memo?: string
  checklistSubItems?: ChecklistSubItem[]
}

export interface ChecklistResponse {
  status: number
  data: Checklist[]
}
