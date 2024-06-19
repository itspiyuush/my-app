import { Link } from "react-router-dom";
import "./topbar.css";
import { Context } from "../../context/Context";
import { useContext } from "react";
export default function Topbar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
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
            <li className="topListItem" onClick={handleLogout}>
              {user && "LOGOUT"}
            </li>
          </ul>
        </div>

        <div className="topRight">
          {user ? (
            <Link to="/settings">
              <img className="topImg" src={user.profilePic} alt="" />
            </Link>
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
