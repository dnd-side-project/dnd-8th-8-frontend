import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const HeaderButton = styled.button`
  height: 30px;
  cursor: pointer;
  background: none;
  border: none;
`

export const Body = styled.div`
  width: 100%;
`

export const BodyHeader = styled.div`
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
}>`
  width: 30px;
  height: 30px;
  cursor: pointer;
  border: none;
  border-radius: 50%;
`
