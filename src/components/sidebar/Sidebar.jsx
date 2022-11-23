import "./sidebar.css"
import {RssFeed, Chat, PlayCircle, Group, Event, SportsEsports, Bookmark} from "@mui/icons-material"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
              <RssFeed className="sidebarIcon"/>
              <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
              <Group className="sidebarIcon"/>
              <span className="sidebarListItemText">Friends</span>
          </li>
          <li className="sidebarListItem">
              <Chat className="sidebarIcon"/>
              <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
              <PlayCircle className="sidebarIcon"/>
              <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
              <Event className="sidebarIcon"/>
              <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
              <SportsEsports className="sidebarIcon"/>
              <span className="sidebarListItemText">Games</span>
          </li>
          <li className="sidebarListItem">
              <Bookmark className="sidebarIcon"/>
              <span className="sidebarListItemText">Bookmarks</span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendsList">
          <li className="sidebarFriend">
            <img src="/assets/Profile pics/Leon prof pic.jpg" alt="" className="sidebarFriendImage" />
            <span className="sidebarFriendName">Leon S. Kennedy</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/Profile pics/ashley prof pic.png" alt="" className="sidebarFriendImage" />
            <span className="sidebarFriendName">Ashley Graham</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/Profile pics/safe_user prof pic.png" alt="" className="sidebarFriendImage" />
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/Profile pics/second_user prof pic.png" alt="" className="sidebarFriendImage" />
            <span className="sidebarFriendName">Number 2</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/Profile pics/Leon prof pic.jpg" alt="" className="sidebarFriendImage" />
            <span className="sidebarFriendName">Leon S. Kennedy</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/Profile pics/Leon prof pic.jpg" alt="" className="sidebarFriendImage" />
            <span className="sidebarFriendName">Leon S. Kennedy</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/Profile pics/Leon prof pic.jpg" alt="" className="sidebarFriendImage" />
            <span className="sidebarFriendName">Leon S. Kennedy</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/Profile pics/Leon prof pic.jpg" alt="" className="sidebarFriendImage" />
            <span className="sidebarFriendName">Leon S. Kennedy</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/Profile pics/Leon prof pic.jpg" alt="" className="sidebarFriendImage" />
            <span className="sidebarFriendName">Leon S. Kennedy</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/Profile pics/Leon prof pic.jpg" alt="" className="sidebarFriendImage" />
            <span className="sidebarFriendName">Leon S. Kennedy</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/Profile pics/Leon prof pic.jpg" alt="" className="sidebarFriendImage" />
            <span className="sidebarFriendName">Leon S. Kennedy</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
