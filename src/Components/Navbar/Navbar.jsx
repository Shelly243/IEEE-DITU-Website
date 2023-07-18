import React, {useState} from "react";
import img from "../../assets/ieeelogo.png";
import logo from "../../assets/navbar-logo.png"
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const { pathname } = useLocation();
  const [menuOpened, setMenuOpened] = useState(false);

  const showNavbar = () => {
    setMenuOpened(!menuOpened);
  };
  return (
    <>
      <div className="navbar">
        <ul className="navcontainer">
          <div className="imgdiv">
            <img className="ieeelogo" src={img} alt="" />
          </div>
          <div className="headingcontainer" activeClassName="active">
            <li className={`${pathname === "/" ? "active" : ""}`}>
              <Link to="/">HOME</Link>
              <div className="underline"></div>
            </li>
            <li className={`${pathname === "/about" ? "active" : ""}`}>
              <Link to="/about">ABOUT</Link>
              <div className="underline"></div>
            </li>
            <li className={`${pathname === "/events" ? "active" : ""}`}>
              <Link to="/events">EVENTS</Link>
              <div className="underline"></div>
            </li>
            <li className={`${pathname === "/teams" ? "active" : ""}`}>
              <Link to="/teams">TEAM</Link>
              <div className="underline"></div>
            </li>
            <li className={`${pathname === "/gallery" ? "active" : ""}`}>
              <Link to="/gallery">GALLERY</Link>
              <div className="underline"></div>
            </li>
            <li className={`${pathname === "/contact" ? "active" : ""}`}>
              <Link to="/contact">CONTACT</Link>
              <div className="underline"></div>
            </li>
          </div>
          <img
            src={logo}
            className="burguricon"
            alt="img not available"
            onClick={() => showNavbar()}
          ></img>
      
        </ul>
      </div>
    </>
  );
};

export default Navbar;
