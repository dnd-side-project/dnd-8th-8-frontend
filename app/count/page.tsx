'use client'

import { useRecoilState } from 'recoil'

import { countAtom } from '@/atoms'

const CountPage = () => {
  const [count, setCount] = useRecoilState(countAtom)

  return (
    <div>
      <h1>CountPage</h1>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  )
}

export default CountPage
