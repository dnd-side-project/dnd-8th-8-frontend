const getCurrencyStrFormat = (num: number) => {
  const units = ['', '만', '억']
  const unitValue = 10000
  const maxUnit = units.length - 1

  let result = ''
  let unitIndex = 0

  while (num >= unitValue && unitIndex < maxUnit) {
    const quotient = Math.floor(num / unitValue)
    const remainder = num % unitValue
    if (remainder !== 0) {
      result = `${remainder}${units[unitIndex]}${result}`
    }
    num = quotient
    unitIndex++
  }

  if (num > 0) {
    result = `${num}${units[unitIndex]}${result}`
  }

  return result
}

export default getCurrencyStrFormat
