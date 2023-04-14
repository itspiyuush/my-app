import "./posts.css";
import Past from "../past/Past";
import {  React } from "react-router-dom";

export default function Posts() {
  return (
    <div className="posts">
        <Past/>
        <Past/>
        <Past/>
        <Past/>
    </div>
  );
}
