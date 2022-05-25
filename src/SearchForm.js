import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const { handleSearch } = useGlobalContext();
  const [query, setQuery] = useState("")
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
    setQuery("")
  }

  useEffect(() => {
    inputRef.current.focus()
  },[])

  return (
    <form className="search-form" onSubmit={onSubmit}>
      <h2>Hacker News Search</h2>
      <p>Type and hit Enter for Results</p>
      <input ref={inputRef} type="text" value={query} className="form-input" onChange={(e) => setQuery(e.target.value)}/>
    </form>
  )
}

export default SearchForm
