import React from 'react'
import Feeds from '../../component/feeds/feeds.jsx'
import LeftComponent from '../../component/leftcomponent/index.jsx'
import RightBar from '../../component/rightbar/index.jsx'
import "./home.css"

function Home({state,dispatch}) {
  return (
    <div className="homewrapper">
      <div className="leftcomponent">
      <LeftComponent/>
      </div>
    <div className='home'>
        <Feeds state={state} dispatch={dispatch}/>
        <RightBar/>
    </div>
    </div>
  )
}

export default Home