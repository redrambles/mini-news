import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const {handlePage, isLoading, nbPages, page} = useGlobalContext();

  return (
    <div className="btn-container">
      <button disabled={isLoading} onClick={() => handlePage("prev")}>Prev Page</button>
      <p>{page + 1} of {nbPages} </p>
      <button disabled={isLoading} onClick={() => handlePage("next")}>Next Page</button>
    </div>
  )
}

export default Buttons


