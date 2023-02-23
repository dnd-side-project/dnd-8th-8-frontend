import { getCurrencyFormat } from '@/utils'

describe('getCurrencyFormat >', () => {
  it('should return a formatted currency string', () => {
    expect(getCurrencyFormat(10000)).toEqual('10,000')
    expect(getCurrencyFormat(100000)).toEqual('100,000')
    expect(getCurrencyFormat(1000000)).toEqual('1,000,000')
    expect(getCurrencyFormat(10000000)).toEqual('10,000,000')
    expect(getCurrencyFormat(100000000)).toEqual('100,000,000')
  })
})
