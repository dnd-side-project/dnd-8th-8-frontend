import { useCalendar } from '@/hooks'

import { CalendarBody, CalendarHeader } from './'
import { Layout } from './Calendar.styled'

const Calendar = () => {
  const { month, year, calendar, nextMonth, prevMonth, handleSelected } =
    useCalendar(new Date())

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
