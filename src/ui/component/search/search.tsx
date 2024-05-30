import { useCallback, useState, type FC } from 'react'

const Search: FC = () => {
  const [query, setQuery] = useState('')
  const items = ['apples', 'bananas', 'orange']

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }, [])

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      <input onChange={handleChange} type="text" value={query} />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Search
