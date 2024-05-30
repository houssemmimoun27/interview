import { useCallback, useState, type FC } from 'react'

const Visibility: FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const handleClick = useCallback(() => setIsVisible(!isVisible), [isVisible])
  return (
    <div>
      <button onClick={handleClick}>{isVisible ? 'hide' : 'show'}</button>
      {isVisible && <p>Halo, Alles Gute</p>}
    </div>
  )
}

export default Visibility
