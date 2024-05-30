import { useCallback, useRef, useState, type FC } from 'react'

const StopWatch: FC = () => {
  const [time, setTime] = useState(0)
  const [isRun, setIsRun] = useState(false)
  const timeRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const handleStart = useCallback(() => {
    if (!isRun) {
      setIsRun(true)
      timeRef.current = setInterval(() => {
        setTime(prev => prev + 1)
      }, 1000)
    }
  }, [isRun])

  const handleStop = useCallback(() => {
    if (isRun) {
      setIsRun(false)
      clearInterval(timeRef.current ?? undefined)
    }
  }, [isRun])

  const handleReset = useCallback(() => {
    setIsRun(false)
    clearInterval(timeRef.current ?? undefined)
    setTime(0)
  }, [])

  return (
    <div
      style={{
        marginTop: '100px',
        display: 'flex',
        gap: '20px',
        alignItems: 'center'
      }}
    >
      <span>{time}</span>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default StopWatch
