import styled from 'styled-components'

export const Layout = styled.div`
  width: 100%;
  padding: 0 1.5rem;
`

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CalendarRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const DayBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-bottom: 1.5rem;
`

export const DateBox = styled.button<{
  selected: boolean
  today: boolean
  prev: boolean
  next: boolean
  firstDay: boolean
}>`
  width: 30px;
  height: 30px;
  color: ${({ selected, today, prev, next, theme }) =>
    selected
      ? theme.color.neutral0
      : today
      ? theme.color.secondary500
      : prev || next
      ? theme.color.neutral100
      : theme.color.neutral500};
  text-decoration: ${({ today }) => (today ? 'underline' : 'none')};
  cursor: pointer;
  background: ${({ selected, theme }) =>
    selected ? theme.color.secondary500 : 'none'};
  border: none;
  border-radius: 50%;
`
