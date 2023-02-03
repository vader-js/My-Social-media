import "./index.css";
import React,{useRef} from "react";
import { Label, PermMedia ,Room, EmojiEmotions} from "@mui/icons-material";
import moi from "../../assets/images/moi.jpeg";
// {type: "share", payload: {id: state.length + 1, username: "Vader", desc: state.value,date: "5 mins ago",...state}}

export default function Share({state, dispatch, src, HandleImage}) {
  // const [src, setsrc] = useState("");
  const ref = useRef(null);
  // const HandleImage = (e) => {
  //   const file = e.target.files[0];
  //     let fileType = file.type; //getting selected file type
  //     let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  //     if(validExtensions.includes(fileType)){ //if user selected file is an image file
  //       let fileReader = new FileReader(); //creating new FileReader object
       
  //       fileReader.onload = ()=>{
  //         let fileURL = fileReader.result; 
  //         setsrc(fileURL);
  //       }
  //       fileReader.readAsDataURL(file);
  //     }else{
  //       alert("Please select an image file (jpg or png).");
  //     }  
  // }
    const handleShare = (e) => {
        e.preventDefault();
        dispatch({type: "share", payload: {id: state.post.length + 1, username: "Vader", desc: state.value, comment: 0, photo: src, like: 0, date: "5 mins ago"}});
        state.value = "";
        console.log(state.post);
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