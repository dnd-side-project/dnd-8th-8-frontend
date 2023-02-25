import { Icon, Text } from '@/components'

import { Header, HeaderButton } from './CalendarHeader.styled'

interface CalendarHeaderProps {
  month: number
  year: number
  nextMonth: () => void
  prevMonth: () => void
}

const CalendarHeader = ({
  month,
  year,
  prevMonth,
  nextMonth,
}: CalendarHeaderProps) => {
  return (
    <Header>
      <HeaderButton onClick={prevMonth} aria-label="Previous month">
        <Icon as="chevron-left" size={30} />
      </HeaderButton>

      <Text as="t3">
        {year}년 {month + 1}월
      </Text>
      <HeaderButton onClick={nextMonth} aria-label="Next month">
        <Icon as="chevron-right" size={30} />
      </HeaderButton>
    </Header>
  )
}

export default CalendarHeader
