import { CalendarItem, chunk } from '@/utils'

import {
  CalendarRow,
  DateBox,
  DayBox,
  Divider,
  Layout,
} from './CalendarBody.styled'

interface CalendarBodyProps {
  calendar: CalendarItem[]
  handleSelected: (day: CalendarItem) => void
}

const CalendarBody = ({ calendar, handleSelected }: CalendarBodyProps) => {
  return (
    <Layout>
      <div>
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <DayBox key={day}>
            <p>{day}</p>
          </DayBox>
        ))}
      </div>

      <Divider />

      {chunk(calendar, 7).map((week, index) => (
        <CalendarRow key={index}>
          {week.map((day) => (
            <DateBox
              key={day.id}
              selected={day.selected}
              today={day.today}
              prev={day.prev}
              next={day.next}
              firstDay={day.date === 1}
              onClick={() => handleSelected(day)}
            >
              {day.date}
            </DateBox>
          ))}
        </CalendarRow>
      ))}
    </Layout>
  )
}

export default CalendarBody
