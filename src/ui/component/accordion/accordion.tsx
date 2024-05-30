import { useCallback, useState, type FC } from 'react'

const Accordion: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleToggle = useCallback(
    (index: number) => (): void =>
      setActiveIndex(index === activeIndex ? null : index),
    [activeIndex]
  )
  
  return ['section 1', 'section 2', 'section 3'].map((title, index) => {
    return (
      <div className="accordion-container" key={index}>
        <button onClick={handleToggle(index)}>{title}</button>
        {activeIndex === index && <p>This is the content of {title}</p>}
      </div>
    )
  })
}

export default Accordion
