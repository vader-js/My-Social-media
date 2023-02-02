import React, { useRef } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import Badge from "@mui/material/Badge";
import { Avatar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./navbar.css";
import moi from "../../assets/images/moi.jpeg";

export default function Navbar() {
  const toggleButton = () => {
    document.querySelector(".onlinestatus").classList.toggle("active");
  };
  let Status = useRef(null);
   const status = {
    online: () => {
      Status.current.style.backgroundColor = "limegreen";
      document.querySelector(".onlinestatus").classList.remove("active");
    },
    offline: () => {
      Status.current.style.backgroundColor = "#ccc";
      document.querySelector(".onlinestatus").classList.remove("active");
    },
    away: () => {
      Status.current.style.backgroundColor = "orange";
      document.querySelector(".onlinestatus").classList.remove("active");
    },
  };
  return (
    <div className="navbar">
      <nav className="navbarwrapper">
        <h1 className="logo">VaderApp</h1>
        <input
          type="text"
          name="searchbar"
          id="searchbar"
          placeholder="how may i help you..."
        />
        <div className="icons">
          <div className="personicon">
            <Badge badgeContent={4} color="primary">
              <PersonIcon className="navbaricon" />
            </Badge>
          </div>
          <div className="messageicon">
            <Badge badgeContent={4} color="primary">
              <MessageIcon className="navbaricon" />
            </Badge>
          </div>
          <div className="notification">
            <Badge badgeContent={4} color="primary">
              <NotificationsIcon className="navbaricon" />
            </Badge>
          </div>
          <div className="pageselector">
            <AddIcon className="navbaricon" />
          </div>
        </div>
        <div className="avatar">
          <Avatar
            onClick={toggleButton}
            className="navbaravatar"
            alt="Remy Sharp"
            src={moi}
          />
          <span ref={Status} className="statusoption"></span>
          <div className="onlinestatus">
            <ul className="status">
              <li>
                <button onClick={status.online}>Online</button>
              </li>
              <li>
                <button onClick={status.away}>Away</button>
              </li>
              <li>
                <button onClick={status.offline}>Offline</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
