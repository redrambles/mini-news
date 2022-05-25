import React, { useState } from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const { handleSearch } = useGlobalContext();
  const [query, setQuery] = useState("")

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch(query)
  }

  return (
    <form className="search-form" onSubmit={onSubmit}>
      <h2>Hacker News Search</h2>
      <p>Type and hit Enter for Results</p>
      <input type="text" className="form-input" onChange={(e) => setQuery(e.target.value)}/>
    </form>
  )
}

export default SearchForm
