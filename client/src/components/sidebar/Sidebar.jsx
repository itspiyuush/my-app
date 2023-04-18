import { useEffect, useState } from "react";
import "./sidebar.css"
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats,setCats] = useState([]);

  useEffect(()=> {
    const getCats = async()=>{
      const res = await axios.get("/categories");
      setCats(res.data); 
    };
    getCats();
  })
  return (
    <div className="s1">
         <span className="sidebarTitle">ABOUT ME</span>
      <div className="sidebarItem">
      <img src="https://images.pexels.com/photos/7988113/pexels-photo-7988113.jpeg?auto=compress&cs=tinysrgb&w=300" height="190px"alt="myimage" id="img"></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ducimus recusandae beatae ad non sunt omnis rerum.</p>
      </div>
      
       <div className="sidebarItem">
       <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            {cats.map((c)=>(
               <Link to={`/?cat=${c.name}`} className="linkc">
               <li className="sidebarListItem">{c.name}</li>
               </Link>
            ))}
       </ul>
    </div>  
    <div className="sidebarItem">
       <span className="sidebarTitle">Socials</span>
       <div className="sidebarSocial">
       <i className="sidebarIcon fab fa-facebook-square"></i>
       <i className="sidebarIcon fab fa-instagram-square"></i>
       <i className="sidebarIcon fab fa-pinterest-square"></i>
       <i className="sidebarIcon fab fa-twitter-square"></i>
       </div> 
    </div> 
    </div>
  );
}
