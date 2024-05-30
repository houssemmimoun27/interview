import { fetchCategories } from '@/api/categorie'
import type { CategoryType } from '@/lib/definition'
import { useCallback, useEffect, useState } from 'react'
import './dropdown.scss'

const DropDown = (): JSX.Element => {
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [expanded, setExpanded] = useState({})

  useEffect(() => {
    fetchCategories()
      .then(res => setCategories(res))
      .catch(err => console.error(err))
  }, [])

  const handleClick = useCallback(
    (name: string, isDirectory: boolean) => (): void => {
      if (isDirectory) {
        setExpanded({
          ...expanded,
          [name]: !expanded[name as keyof object]
        })
      }
    },
    [expanded]
  )

  const renderNode = (categorie: CategoryType): JSX.Element => {
    const isDirectory = categorie.children.length > 0
    const { name, count } = categorie
    const isExpanded = expanded[name as keyof object] as boolean

    return (
      <div className="category-container" key={categorie.id}>
        <div
          className={isDirectory ? 'directory' : 'file'}
          onClick={handleClick(name, isDirectory)}
        >
          {isDirectory ? (isExpanded ? '📂' : '📁') : '🖊️'} {name} {count}
        </div>
        {isDirectory && isExpanded && (
          <ul>
            {categorie.children.map(c => (
              <li key={`${c.count}-${c.name}`}>{renderNode(c)}</li>
            ))}
          </ul>
        )}
      </div>
    )
  }

  return <div>{categories.map(categorie => renderNode(categorie))}</div>
}

export default DropDown
