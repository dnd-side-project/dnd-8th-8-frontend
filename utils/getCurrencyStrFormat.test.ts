import { getCurrencyStrFormat } from '@/utils'

describe('getCurrencyStrFormat >', () => {
  it('should return a formatted currency string', () => {
    expect(getCurrencyStrFormat(10000)).toEqual('1만')
    expect(getCurrencyStrFormat(100000)).toEqual('10만')
    expect(getCurrencyStrFormat(1000000)).toEqual('100만')
    expect(getCurrencyStrFormat(10000000)).toEqual('1000만')
    expect(getCurrencyStrFormat(55000000)).toEqual('5500만')
    expect(getCurrencyStrFormat(100000000)).toEqual('1억')
    expect(getCurrencyStrFormat(155000000)).toEqual('1억5500만')
  })
})
