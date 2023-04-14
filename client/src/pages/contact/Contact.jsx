import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <br></br>
      <br></br>
      <br></br>
      <p id="conp">Contact Us</p>
      <p>
        Address: 1st Floor, B - Millenium Point, Lal Darwaja Station Rd, opp.
        Gabani Kidney Hospital, Surat, Gujarat 395003
      </p>
      <p>Phone: +919090896XX</p>
      <div className="icons">
        <i className="sidebarIcon fa-brands fa-linkedin"></i>
        <i className="sidebarIcon fab fa-facebook-square"></i>
        <i className="sidebarIcon fab fa-instagram-square"></i>
        <i className="sidebarIcon fab fa-twitter-square"></i>
      </div>
    </div>
  );
}
