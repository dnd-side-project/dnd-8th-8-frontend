import { atom } from 'recoil'

const userState = atom({
  key: 'userState',
  default: { gender: 'women' },
})

export default userState
