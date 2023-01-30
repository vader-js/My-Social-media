import "./index.css";
import React from "react";
import { Label, PermMedia ,Room, EmojiEmotions} from "@mui/icons-material";
import moi from "../../assets/images/moi.jpeg";
// {type: "share", payload: {id: state.length + 1, username: "Vader", desc: state.value,date: "5 mins ago",...state}}

export default function Share({state, dispatch}) {
    const handleShare = (e) => {
        e.preventDefault();
        dispatch({type: "share", payload: {id: state.post.length + 1, username: "Vader", desc: state.value,date: "5 mins ago"}});
        state.value = "";
    }
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={moi} alt="" />
          <input
            placeholder="What's in your mind Vader?"
            className="shareInput"
            type="text"
            value={state.value}
            onChange={(e) => dispatch({type: "store_value",payload:e.target.value} )}
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button onClick={handleShare} className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}