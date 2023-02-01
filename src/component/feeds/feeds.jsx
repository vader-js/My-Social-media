import React from 'react'
import Share from '../mymenu'
import "./feeds.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';


function Feeds({state, dispatch}) {
  const postLike = (id) => {
    if(!id.isLike){
    id.like = id.like + 1;
    id.isLike = !id.isLike;
    }else{
      id.like = id.like - 1;
      id.isLike = !id.isLike;
    }
    dispatch({type: "like", payload: [...state.post]})
  }
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
                <span className='date'>{post.date}</span>
              </h2>
              <span className='moreicon'><MoreVertIcon/></span>
            </div>
            <p>{post.desc}</p>
            <img src={post.photo} alt="post" />
            <div className="feedsbottom">
              <div className="bottomleft">
               <span onClick={()=> postLike(post)} className='thumbsup'
               style={!post.isLike?{background:"rgb(88, 193, 245)"}:{background:"rgb(31, 86, 249)"}}><ThumbUpIcon color='white'/></span> 
               <span className="hearts"><FavoriteIcon/></span>
               <span>{post.like} people like it</span>
              </div>
              <div className="bottomright">
                {post.comment} comments
              </div>
            </div>
          </div>
        )
      })}
    
    </div>
  )
}

export default Feeds