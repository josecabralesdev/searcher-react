import React from 'react'
import { useMemo } from 'react'

function MarkedItems({ item, query, onClick }) {
  const { left, center, right } = useMemo(() => getPositions(item, query), [item, query])

  function getPositions(item, query) {
    const index = item.title.toLowerCase().indexOf(query)
    const left = item.title.slice(0, index)
    const right = item.title.slice(index + query.length)
    const center = item.title.slice(index, index + query.length)

    return {
      left,
      center,
      right
    }
  }

  return (
    <a className='border-b border-[#555] border-dashed pb-1 last:border-none last:p-0' href='#'>{left}
      <span className='font-bold bg-yellow-400'>{center}</span>
      {right}</a>
  )
}

export default MarkedItems