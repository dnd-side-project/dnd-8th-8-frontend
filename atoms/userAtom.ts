import { UserType } from '@/types/user'
import { atom } from 'recoil'

const userState = atom<UserType>({
  key: 'userState',
  default: {
    weddingDay: '',
    preparing: false,
    gender: 'FEMALE',
    budget: 0,
  },
})

export default userState
