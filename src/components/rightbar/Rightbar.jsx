import "./rightbar.css";

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
          <li className="rightbarFriend">
            <div className="friendImgContainer">
              <img src="/assets/Profile pics/ashley prof pic.png" alt="" className="friendProfImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="rightbarFriendUsername">Ashley Graham</span>
          </li>
          <li className="rightbarFriend">
            <div className="friendImgContainer">
              <img src="/assets/Profile pics/Leon prof pic.jpg" alt="" className="friendProfImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="rightbarFriendUsername">Leon S. Kennedy</span>
          </li>
          <li className="rightbarFriend">
            <div className="friendImgContainer">
              <img src="/assets/Profile pics/ashley prof pic.png" alt="" className="friendProfImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="rightbarFriendUsername">Ashley Graham</span>
          </li>
          <li className="rightbarFriend">
            <div className="friendImgContainer">
              <img src="/assets/Profile pics/ashley prof pic.png" alt="" className="friendProfImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="rightbarFriendUsername">Ashley Graham</span>
          </li>
          <li className="rightbarFriend">
            <div className="friendImgContainer">
              <img src="/assets/Profile pics/ashley prof pic.png" alt="" className="friendProfImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="rightbarFriendUsername">Ashley Graham</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
