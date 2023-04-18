import "./posts.css";
import Past from "../past/Past";
import {  React } from "react-router-dom";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Past post={p} />
      ))}
    </div>
  );
}
