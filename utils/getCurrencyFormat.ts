function getCurrencyFormat(number: number) {
  return new Intl.NumberFormat('ko-KR').format(number)
}

export default getCurrencyFormat
