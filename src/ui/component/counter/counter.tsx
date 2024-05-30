import { type FC, useState, useCallback } from 'react'

const Counter: FC = () => {
  const [count, setCount] = useState(0)

  const handleIncrementCounter = useCallback(() => setCount(c => c + 1), [])
  const handleDecrementCounter = useCallback(
    () => setCount(c => (c > 0 ? c - 1 : 0)),
    []
  )

  return (
    <div>
      <span>{count}</span>
      <button onClick={handleIncrementCounter}>+</button>
      <button onClick={handleDecrementCounter}>-</button>
    </div>
  )
}

export default Counter
