export type genderType = 'MALE' | 'FEMALE'

export interface UserType {
  preparing: boolean
  weddingDay: string
  gender: genderType
  budget: number
}
