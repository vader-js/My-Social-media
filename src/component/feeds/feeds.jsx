import React, { useEffect, useState } from 'react'
import Share from '../mymenu'
import "./feeds.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';






function Feeds({state, dispatch}) {
  
 const [loaded, setLoaded] = useState(false);

 function loadimage(image){
  image.src = image.getAttribute("data-src");
}
  useEffect(() => {
    let images = document.querySelectorAll('[data-src]');
    let observer = new IntersectionObserver((entries,observer) => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
          loadimage(entry.target)
          observer.unobserve(entry.target)
          }
        });
    },
    {
    rootMargin: "0px 0px 0px 0px",
    threshold: 1
  });
     images.forEach(image => {
       observer.observe(image)
     })
  },[]);

 

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
            <img src={''} data-src={post.photo} alt="post" onLoad={()=> setLoaded(true)} className={loaded? "loaded": "loading"}/>
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