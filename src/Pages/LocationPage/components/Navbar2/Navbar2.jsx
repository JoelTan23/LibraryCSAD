import React, { useState } from "react";
import "./Navbar2.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import account_icon from "../../assets/user.png";
import { Link } from "react-router-dom";

const blue_nav = {
  background: "rgba(96, 112, 255, 0.8)",
};

export const Navbar2 = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const toggleDropdown = () => {
    setServicesDropdown(!servicesDropdown);
  };

  return (
    <nav style={blue_nav} className="container">
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>

        {/* Services Dropdown */}
        <li className="dropdown">
          <span onClick={toggleDropdown}>Services ▼</span>
          {servicesDropdown && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/Events">Upcoming Events</Link>
              </li>
              <li>
                <Link to="/MeetingRoomsBooking">Meeting Rooms</Link>
              </li>
              <li>
                <Link to="/Loan">Book Loaning</Link>
              </li>
              <li>
                <Link to="/Catalogues">Catalogues</Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link to="/Events">Gallery</Link>
        </li>
        <li>
          <Link to="/catalogues">Catalogues</Link>
        </li>
        <li>
          <img src={account_icon} alt="" className="user" />
        </li>
        <li>
          <Link to="/Location" className="btn">
            Contact us
          </Link>
        </li>
      </ul>

      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar2;
