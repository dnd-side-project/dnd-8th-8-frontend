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
  background: ${({ theme }) => theme.color.gray200};
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
}>`
  width: 30px;
  height: 30px;

  color: ${({ selected, today, prev, next, theme }) =>
    selected
      ? theme.color.white
      : today
      ? theme.color.blue500
      : prev || next
      ? theme.color.gray400
      : theme.color.black};

  cursor: pointer;

  background: ${({ selected, theme }) =>
    selected ? theme.color.green300 : 'none'};
  border: none;

  border-radius: 50%;

  &:hover {
    color: ${({ theme }) => theme.color.gray500};
    background: ${({ theme }) => theme.color.green100};
  }
`