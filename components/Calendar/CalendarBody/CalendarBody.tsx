import { Text } from '@/components'
import { CalendarItem, chunk } from '@/utils'

import {
  CalendarRow,
  DateBox,
  DayBox,
  FlexBox,
  Layout,
} from './CalendarBody.styled'

interface CalendarBodyProps {
  calendar: CalendarItem[]
  handleSelected: (day: CalendarItem) => void
}

const CalendarBody = ({ calendar, handleSelected }: CalendarBodyProps) => {
  return (
    <Layout>
      <FlexBox>
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <DayBox key={day}>
            <Text as="t2">{day}</Text>
          </DayBox>
        ))}
      </FlexBox>

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
              <Text
                as="t3"
                color={
                  day.selected
                    ? 'neutral0'
                    : day.today
                    ? 'secondary500'
                    : day.prev || day.next
                    ? 'neutral100'
                    : 'neutral500'
                }
              >
                {day.date}
              </Text>
            </DateBox>
          ))}
        </CalendarRow>
      ))}
    </Layout>
  )
}

export default CalendarBody
