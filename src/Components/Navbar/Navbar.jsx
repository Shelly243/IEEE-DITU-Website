import React from "react";
import img from "../../assets/ieeelogo.png";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="navbar">
        <ul className="navcontainer">
          <div className="imgdiv">
            <img className="ieeelogo" src={img} alt="" />
          </div>
          <div className="headingcontainer">
            <li className={`${pathname === "/" ? "active" : ""}`}>
              <Link to="/">HOME</Link>
            </li>
            <li className={`${pathname === "/about" ? "active" : ""}`}>
              <Link to="/about">ABOUT</Link>
            </li>
            <li className={`${pathname === "/events" ? "active" : ""}`}>
              <Link to="/events">EVENTS</Link>
            </li>
            <li className={`${pathname === "/teams" ? "active" : ""}`}>
              <Link to="/teams">TEAM</Link>
            </li>
            <li className={`${pathname === "/gallery" ? "active" : ""}`}>
              <Link to="/gallery">GALLERY</Link>
            </li>
            <li className={`${pathname === "/contact" ? "active" : ""}`}>
              <Link to="/contact">CONTACT</Link>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
