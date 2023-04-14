import { Link } from "react-router-dom";
import "./topbar.css";
export default function topbar() {
  const user = true;
  return (
    <>
      <div className="top">
        <div className="topLeft">
          <span className="maintxt">Social Blog</span>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                HOME
              </Link>
            </li>
            <li className="topListItem">
              <Link className="linkc" to="/about">
                ABOUT
              </Link>
            </li>
            <li className="topListItem">
              <Link className="linkc" to="/contact">
                CONTACT
              </Link>
            </li>
            <li className="topListItem">
              <Link className="linkc" to="/write">
                WRITE
              </Link>
            </li>
            <li className="topListItem">{user && "LOGOUT"}</li>
          </ul>
        </div>

        <div className="topRight">
          {user ? (
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="profile"
            />
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="linkc" to="/login">
                  LOGIN
                </Link>
              </li>

              <li className="topListItem">
                <Link className="linkc" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          )}

          <i className="topSearchIcon fas fa-search"></i>
        </div>
      </div>
    </>
  );
}
