import React, { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Storecontext } from "../../context/Storecontext";

const Navbar = ({ setLogin, user, onLogout }) => {
  const [menu, setMenu] = useState("Home");
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { getTotal } = useContext(Storecontext);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };

    if (showProfileMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showProfileMenu]);
  
  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        {/* Home will use Link because it routes to '/' */}
        <Link
          to="/"
          className={menu === "Home" ? "active" : ""}
          onClick={() => setMenu("Home")}
        >
          Home
        </Link>

        {/* Menu will scroll to exploremenu */}
        <a
          href="#exploremenu"
          className={menu === "Menu" ? "active" : ""}
          onClick={() => setMenu("Menu")}
        >
          Menu
        </a>

        {/* Contact-Us will scroll to footer */}
        <a
          href="#footer"
          className={menu === "Contact-us" ? "active" : ""}
          onClick={() => setMenu("Contact-us")}
        >
          Contact-Us
        </a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Basket" />
          </Link>
          <div className={getTotal() === 0 ? "" : "dot"}></div>
        </div>
        {user ? (
          <div className="profile-container" ref={profileRef}>
            <div
              className="profile-icon"
              onClick={() => setShowProfileMenu(!showProfileMenu)}
            >
              {user.firstLetter}
            </div>
            {showProfileMenu && (
              <div className="profile-menu">
                <div className="profile-menu-item">
                  <p>{user.name}</p>
                  <p className="profile-email">{user.email}</p>
                </div>
                <hr />
                <div
                  className="profile-menu-item"
                  onClick={() => {
                    onLogout();
                    setShowProfileMenu(false);
                  }}
                >
                  <p>Logout</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button onClick={() => setLogin(true)}>Sign In</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
