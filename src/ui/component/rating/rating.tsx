import React, { useCallback, type FC } from 'react'

const { useState } = React

const Rating: FC = () => {
  const [rating, setRating] = useState(0)

  const handleRating = useCallback(
    (index: number) => (): void => setRating(index + 1),
    []
  )

  return (
    <div>
      {[0, 1, 2, 3, 4].map((_, index) => (
        <span
          key={index}
          onClick={handleRating(index)}
          style={{ cursor: 'pointer', color: rating > index ? 'gold' : 'grey', fontSize: "60px" }}
        >
          *
        </span>
      ))}
    </div>
  )
}

export default Rating
