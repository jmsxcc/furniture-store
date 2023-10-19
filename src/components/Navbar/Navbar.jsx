import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Furniture Store</h1>
      </div>
      <ul className="con-list">
        <li>
          <a href="#home" className="list-menu">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="list-menu">
            About
          </a>
        </li>
        <li>
          <a href="#menu" className="list-menu">
            Menu
          </a>
        </li>
        <li>
          <a href="#contact" className="list-menu">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
