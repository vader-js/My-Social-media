import React from 'react'
import Feeds from '../../component/feeds/feeds.jsx'
import LeftComponent from '../../component/leftcomponent/index.jsx'
import RightBar from '../../component/rightbar/index.jsx'
import "./index.css"

function Home() {
  return (
    <div className='home'>
        <LeftComponent/>
        <Feeds/>
        <RightBar/>
    </div>
  )
}

export default Home