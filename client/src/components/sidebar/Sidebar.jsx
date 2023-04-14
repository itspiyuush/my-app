import "./sidebar.css"

export default function Sidebar() {
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
            
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">PhotoGraphy</li>
            <li className="sidebarListItem">Sci-Fi</li>
            <li className="sidebarListItem">Sports</li>
            <li className="sidebarListItem">Health</li>
            <li className="sidebarListItem">Innovative</li>
            <li className="sidebarListItem">History</li>
            <li className="sidebarListItem">Philosophy</li>
      
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
