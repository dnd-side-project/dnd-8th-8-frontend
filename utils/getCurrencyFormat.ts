export const getCurrencyFormat = (number: number) => {
  return new Intl.NumberFormat('ko-KR').format(number)
}
