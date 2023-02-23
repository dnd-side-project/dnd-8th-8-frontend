const getCurrencyFormat = (number: number) =>
  new Intl.NumberFormat('ko-KR').format(number)

export default getCurrencyFormat
