'use client'

import { useRouter } from 'next/navigation'
import { useSetRecoilState } from 'recoil'

import userState from '@/atoms/userAtom'
import { Calendar } from '@/components'
import { useCalendar } from '@/hooks'
import { OnBoardingLayout } from '@/layouts/onboarding'

const WeddingDay = () => {
  const router = useRouter()
  const setUserInfo = useSetRecoilState(userState)
  const { month, year, calendar, nextMonth, prevMonth, handleSelected } =
    useCalendar(new Date())

  console.log('month', month)
  console.log('year', year)
  console.log('calendar', calendar)

  return (
    <OnBoardingLayout
      title={`결혼식 예정일이\n언제인가요? 🎉`}
      subTitle={`결혼식 예정일을 기준으로\nD-DAY를 알려드려요.`}
      hideSkipBtn={true}
      handleBackBtnClick={() => router.push('/onboarding/wedding-status')}
      handleNextBtnClick={() => {
        setUserInfo((prev) => ({ ...prev, weddingDay: '2023-02-18' }))
        router.push('/onboarding/gender')
      }}
    >
      <Calendar
        month={month}
        year={year}
        calendar={calendar}
        nextMonth={nextMonth}
        prevMonth={prevMonth}
        handleSelected={handleSelected}
      />
    </OnBoardingLayout>
  )
}

export default WeddingDay
