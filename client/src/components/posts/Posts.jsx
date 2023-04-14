import "./posts.css";
import Past from "../past/Past";
import {  React, Link } from "react-router-dom";

export default function Posts() {
  return (
    <div className="posts">
       <Link className="linkc" to="/post/:id">
               <Past/>
      </Link>
      <Link className="linkc" to="/post/:id">
               <Past/>
      </Link>
      <Link className="linkc" to="/post/:id">
               <Past/>
      </Link>
      <Link className="linkc" to="/post/:id">
               <Past/>
      </Link>
      <Link className="linkc" to="/post/:id">
               <Past/>
      </Link>
    </div>
  );
}
