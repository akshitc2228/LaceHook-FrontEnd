import "./share.css";
import {PermMedia} from "@mui/icons-material"

export default function Share() {
  return (
    <div className="shareContainer">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="/assets/Profile pics/ada prof pic.jpg"
            alt=""
            className="profileImg"
          />
          <input placeholder="What's on your mind?" className="shareInput" />
        </div>
        <hr className="shareHr" /> 
        <div className="shareBottom">
            <div className="shareOptions">
                <PermMedia className="shareIcon"/>
                <span className="shareOptionText">Photo or Video</span>
            </div>
        </div>
      </div>
    </div>
  );
}
