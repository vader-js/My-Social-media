import "./index.css";
import React,{useRef} from "react";
import { Label, PermMedia ,Room, EmojiEmotions} from "@mui/icons-material";
import moi from "../../assets/images/moi.jpeg";

export default function Share({state, dispatch, HandleImage}) {
  const ref = useRef(null);
 
  const handleShare = (e) => {
        e.preventDefault();
        dispatch({type: "share", payload: {id: state.post.length + 1, username: "Vader", desc: state.value, comment: 0, photo: state.src, like: 0, date: "5 mins ago"}});
        state.value = "";
        state.src = "";
        console.log(state);
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
                <div className="shareOption" onClick={()=> ref.current.click()}>
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <input type="file" name="" id="inputfile" ref={ref} onChange={HandleImage} hidden/>
                <div className="thumbnail">
                  {state.src && <img classname="thumbnail"src={state.src} alt=""/>}
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