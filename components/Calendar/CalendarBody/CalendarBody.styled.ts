import styled from 'styled-components'

export const Layout = styled.div`
  width: 100%;
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 8px 0 20px;
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
`

export const DateBox = styled.button<{
  selected: boolean
  today: boolean
  prev: boolean
  next: boolean
  firstDay: boolean
}>``
