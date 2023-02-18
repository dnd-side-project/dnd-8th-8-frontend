import { getCurrencyFormat } from './getCurrencyFormat'

export const getCurrencyStrFormat = (arr: string[]) => {
  if (!arr.length) {
    return '0'
  }
  if (arr.length < 5) {
    return getCurrencyFormat(parseInt(arr.join('')))
  }

  if (arr.length >= 5 && arr.length < 9) {
    const underTenThousand: string = getCurrencyFormat(
      parseInt(arr.slice(arr.length - 4, arr.length).join('')),
    )
    return `${getCurrencyFormat(
      parseInt(arr.slice(0, arr.length - 4).join('')),
    )}만${underTenThousand === '0' ? '' : ` ${underTenThousand}`}`
  }

  if (arr.length >= 9) {
    const underHundredMillion: string = getCurrencyFormat(
      parseInt(arr.slice(arr.length - 8, arr.length - 4).join('')),
    )
    const underTenThousand: string = getCurrencyFormat(
      parseInt(arr.slice(arr.length - 4, arr.length).join('')),
    )
    return `${getCurrencyFormat(
      parseInt(arr.slice(0, arr.length - 8).join('')),
    )}억${underHundredMillion === '0' ? '' : ` ${underHundredMillion}만`}${
      underTenThousand === '0' ? '' : ` ${underTenThousand}`
    }`
  }
}
