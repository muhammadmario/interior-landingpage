import React, { useState } from "react";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <h1>Interior</h1>
        </div>
        <div class="menu_icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav_menu active" : "nav_menu"}>
          <li className="nav_items">
            <a to="/" className="nav-links" onClick={closeMobileMenu}>
              Shop
            </a>
          </li>
          <li className="nav_items">
            <a to="/agents" className="nav-links" onClick={closeMobileMenu}>
              Product
            </a>
          </li>
          <li className="nav_items">
            <a to="/weapons" className="nav-links" onClick={closeMobileMenu}>
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
