/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from "react-router-dom";
import "./past.css";
export default function Past({ post }) {
  return (
    <div className="past">
      
        {post.photo && <img className="postImg" src={post.photo} alt="blog image"/>}
      

      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="linkc">
          <span className="postTitle">{post.title}</span>
        </Link>

        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
