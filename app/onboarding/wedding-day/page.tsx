'use client'

import { useRouter } from 'next/navigation'
import { useSetRecoilState } from 'recoil'
import styled from 'styled-components'

import userState from '@/atoms/userAtom'
import { Calendar } from '@/components'
import { useCalendar } from '@/hooks'
import { OnBoardingLayout } from '@/layouts/onboarding'

const WeddingDay = () => {
  const router = useRouter()
  const setUserInfo = useSetRecoilState(userState)
  const {
    month,
    year,
    calendar,
    nextMonth,
    prevMonth,
    handleSelected,
    selected,
  } = useCalendar(new Date())

  const selectedDate = selected.length > 0 ? selected[0].id : null
  console.log(selectedDate)

  return (
    <OnBoardingLayout
      title={`결혼 예정일이\n언제인가요?`}
      subTitle={`결혼 예정일을 기준으로\nD-DAY를 알려드려요.`}
      hideSkipBtn
      bottomText="결혼식 예정일은 마이페이지에서 수정 가능합니다"
      handleBackBtnClick={() => router.push('/onboarding/wedding-status')}
      handleNextBtnClick={() => {
        setUserInfo((prev) => ({ ...prev, weddingDay: '2023-02-18' }))
        router.push('/onboarding/gender')
      }}
    >
      <ContentSection>
        <Calendar
          month={month}
          year={year}
          calendar={calendar}
          nextMonth={nextMonth}
          prevMonth={prevMonth}
          handleSelected={handleSelected}
        />
      </ContentSection>
    </OnBoardingLayout>
  )
}

export default WeddingDay

const ContentSection = styled.div`
  margin-top: 3.2rem;
`
