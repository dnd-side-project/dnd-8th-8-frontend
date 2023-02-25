import { Icon, Text } from '@/components'

import { HeaderButton, Layout } from './CalendarHeader.styled'

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
    <Layout>
      <HeaderButton onClick={prevMonth} aria-label="Previous month">
        <Icon as="chevron-left" color="neutral900" />
      </HeaderButton>

      <Text as="t2">
        {month + 1}월, {year}년
      </Text>

      <HeaderButton onClick={nextMonth} aria-label="Next month">
        <Icon as="chevron-right" color="neutral900" />
      </HeaderButton>
    </Layout>
  )
}

export default CalendarHeader
