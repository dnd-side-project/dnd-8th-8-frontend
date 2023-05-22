interface ChecklistSubItem {
  id?: number
  contents: string
  isChecked?: string
}

export interface ChecklistItem {
  id?: number
  title: string
  checkDate: string
  startTime: string
  endTime: string
  place: string
  memo: string
}

export interface Checklist {
  checklistItem: ChecklistItem
  checklistSubItems: ChecklistSubItem[]
}

export interface ChecklistResponse {
  status: number
  data: Checklist[]
}
