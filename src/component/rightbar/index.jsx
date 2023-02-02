import { Avatar } from '@mui/material';
import React from 'react'
import { Users } from '../../data/dataframe';
import friends from "../../assets/images/friends.jpg"
import "./index.css"

function RightBar() {
  return (
    <div className='rightbar'>
      <div className="rightimage">
        <img src={friends} alt="" />
      </div>
      <div className="onlinefriends">
        <h2>Online friends</h2>
      <ul className="friendlist">
                {Users.map(user => {
                 return(   <li className="friendlists" key={user.id}>
                  <div className="avatar">
                  <Avatar
                className="fri"
                alt="Remy Sharp"
                src={user.profilePicture}  />
                <span className='status'></span>
                <span className="friendname">{user.username}</span>
                    
                  </div>
                    
                    </li>)
                })}
            </ul>
      </div>
    </div>
  )
}

export default RightBar;