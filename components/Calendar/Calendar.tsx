import { CalendarItem } from '@/utils'

import { CalendarBody, CalendarHeader } from './'
import { Layout } from './Calendar.styled'

export interface CalendarProps {
  month: number
  year: number
  calendar: CalendarItem[]
  nextMonth: () => void
  prevMonth: () => void
  handleSelected: (day: CalendarItem) => void
}

const Calendar = ({
  month,
  year,
  calendar,
  nextMonth,
  prevMonth,
  handleSelected,
}: CalendarProps) => {
  return (
    <Layout>
      <CalendarHeader
        month={month}
        year={year}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <CalendarBody calendar={calendar} handleSelected={handleSelected} />
    </Layout>
  )
}

export default Calendar
