import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const { isLoading, hits, removeStory, searchTerm } = useGlobalContext();
  if (isLoading){
    return <div className="loading"></div>
  } 
  return (
    <section className="stories">
      <h3>Results for {searchTerm}</h3>
      {hits.map(story => {
        const {objectID, title, num_comments, url, points, author} = story
       return ( <article className="story" key={objectID}>
          <h4 className="title">{title}</h4>
          <p className="info">
            {points} points by <span>{author} | </span>{num_comments}{' '} comments
          </p>
          <div>
            <a href={url} className="read-link" target='
            _blank' rel="noopener noferrer">Read more</a>
            <button className="remove-btn" onClick={() => removeStory(objectID)}>Remove</button>
          </div>
        </article>)
      })}
    </section>
  )
}

export default Stories
