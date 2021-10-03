import React, {useState} from "react";
import {Link} from "react-router-dom";
import './Navbar.css';
import img from "../assets/images/yoga-lg.png";
function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <nav className="navbar">
            <Link to="/" className="home">
            <h3 className="logo">
                <img src={img} alt="logo" />
            </h3>
            </Link>
            <ul className={isMobile? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
            <Link to="/" className="home">
                <li>Home</li>
            </Link>
            <Link to="/aboutus" className="aboutus">
                <li>Aboutus</li>
            </Link>
            <Link to="/services" className="services">
                <li>Services</li>
            </Link>
            <Link to="/contactus" className="contactus">
                <li>Contact</li>
            </Link>
            </ul>
          <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
              {isMobile ? (
              <i className="fas fa-times"></i>
              ) : (
              <i className="fas fa-bars"></i>
              )}
          </button>
        </nav>
    );
};

export default Navbar;
