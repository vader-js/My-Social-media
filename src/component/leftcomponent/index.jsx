import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import React from 'react';
import "./index.css"
import { Avatar } from '@mui/material';

function LeftComponent() {
  return (
    <div className='leftlistwrapper'>
        <ul className="leftlist">
            <li className="leftlistitem">
                <div>
                <RssFeedIcon/>
                <span className="leftlistitems">Feed</span>
                </div>
            </li>
            <li className="leftlistitem">
                <div>
                <ChatIcon/>
                <span className="leftlistitems">Charts</span>
                </div>
            </li>
            <li className="leftlistitem">
                <div>
                <VideoLibraryIcon/>
                <span className="leftlistitems">Videos</span>
                </div>
            </li>
            <li className="leftlistitem">
                <div>
                <GroupsIcon/>
                <span className="leftlistitems">Groups</span>
                </div>
            </li>
            <li className="leftlistitem">
                <div>
                <BookmarksIcon/>
                <span className="leftlistitems">Bookmarks</span>
                </div>
            </li>
            <li className="leftlistitem">
                <div>
                <LiveHelpIcon/>
                <span className="leftlistitems">Questions</span>
                </div>
            </li>
            <li className="leftlistitem">
                <div>
                <WorkIcon/>
                <span className="leftlistitems">Jobs</span>
                </div>
            </li>
            <li className="leftlistitem">
                <div>
                <EventIcon/>
                <span className="leftlistitems">Events</span>
                </div>
            </li>
            <li className="leftlistitem">
                <div>
                <SchoolIcon/>
                <span className="leftlistitems">Courses</span>
                </div>
            </li>
            <li className="leftlistitem">
                <button type="button">Show more</button>
            </li>
           
        </ul>
        <hr className='leftdemacatingline'/>

        <div className="friends">
            <ul className="friendlist">
                <li className="friendlists">
                <Avatar
            className="fri"
            alt="Remy Sharp"
            src=""  />
            <span className="friendname">Vader DarkSky</span>
                </li>
                <li className="friendlists">
                <Avatar
            className="fri"
            alt="Remy Sharp"
            src=""  />
            <span className="friendname">Vader DarkSky</span>
                </li>
                <li className="friendlists">
                <Avatar
            className="fri"
            alt="Remy Sharp"
            src=""  />
            <span className="friendname">Vader DarkSky</span>
                </li>
                <li className="friendlists">
                <Avatar
            className="fri"
            alt="Remy Sharp"
            src=""  />
            <span className="friendname">Vader DarkSky</span>
                </li>
                <li className="friendlists">
                <Avatar
            className="fri"
            alt="Remy Sharp"
            src=""  />
            <span className="friendname">Vader DarkSky</span>
                </li>
            
        
            </ul>
        </div>
      
    </div>
  )
}

export default LeftComponent
