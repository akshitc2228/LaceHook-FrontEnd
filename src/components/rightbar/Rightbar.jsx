import "./rightbar.css";
import {Users} from "../../dummyData"
import Online from "../online/Online";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            {" "}
            <b>Leon S. Kennedy</b> has a birthday today
          </span>
        </div>
        <h4 className="onlineFriends">Friends online</h4>
        <ul className="rightbarFriendslist">
          {Users.map(u => (
            <Online key={u.id} user ={u}/>
          ))}
        </ul>
      </div>
    </div>
  );
}
