import React from 'react'
import Share from '../mymenu'
import "./feeds.css"


function Feeds({state, dispatch}) {
  return (
    <div className='feeds'>
      <div className="topmenu">
        <Share dispatch={dispatch} state={state}/>
      </div>
      {state.post.map(post =>{
        return(
          <div className="feedsContainer" key={post.id}>
            <div className="topfeedsWrapper">
              <h2 className="name">
                {post.username}-
              </h2>
              <span>{post.date}</span>
            </div>
            <p>{post.desc}</p>
            <img src={post.photo} alt="" />
          </div>
        )
      })}
    
    </div>
  )
}

export default Feeds