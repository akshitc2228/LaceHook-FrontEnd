import "./post.css"
import {MoreVert} from "@mui/icons-material"

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img src="/assets/Profile pics/ada prof pic.jpg" alt="" className="postCreatorImage" />
                <span className="postUserName">Ada Wong</span>
                <span className="postDate">5 minutes ago</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
        </div>
        <div className="postCentre">
            <span className="postText">Good times Leon ;)</span>
            <img src="/assets/posts/ada post.jpg" alt="" className="postImage" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img src="/assets/like logo.png" alt="" className="reactionButton" />
                <img src="/assets/heart logo.png" alt="" className="reactionButton" />
                <span className="likeCounter">11.5k people like it</span>
            </div>
            <div className="postBottomRight">
                <span className="commentsCounter">15 comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}
