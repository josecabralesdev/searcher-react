import React, { useMemo, useState } from 'react'
import { useEffect } from 'react'
import MarkedItems from './MarkedItems'

function Results({ items, onItemSelected, query, onResultsCalculated }) {
  const [results, setResults] = useState([])
  const filteredItems = useMemo(() => findMath(items, query), [items, query])

  useEffect(() => {
    onResultsCalculated(results)
  }, [results])

  function findMath(items, query) {
    const res = items.filter(i => {
      return i.title.toLowerCase().indexOf(query) >= 0 && query.length > 0
    })

    setResults(res)
    return res
  }

  return (
    <div className='flex flex-col gap-1'>
      {
        query !== ""
          ?
          filteredItems.map(item => (
            <MarkedItems key={item.id} item={item} onClick={onItemSelected} query={query} />
          ))
          :
          ""
      }
    </div>
  )
}

export default Results