import React, { useState } from 'react'
import Results from './Results'

function SearchBar({ items, onItemSelected }) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  function handleChange(e) {
    const value = e.target.value
    setQuery(value)
  }

  function handleResults(items) {
    setResults(items)
  }

  function handleItemSelected() {

  }

  return (
    <div className='flex flex-col items-center gap-3'>
      {
        results && <div>{results.length} <strong>results</strong></div>
      }
      <input className='p-2 rounded-md bg-[#444] w-full border-none outline-none' onChange={handleChange} value={query} />
      <Results
        items={items}
        onItemSelected={handleItemSelected}
        query={query}
        onResultsCalculated={handleResults}
      />
    </div>
  )
}

export default SearchBar