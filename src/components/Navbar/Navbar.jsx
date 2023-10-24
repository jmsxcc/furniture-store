import React, { useState } from "react";
import "./navbar.css";
import { BiSolidStore } from "react-icons/bi";

const Navbar = () => {
  const [toggle, showMenu] = useState(false);

  return (
    <nav>
      <div className="nav-wrapper">
        <div className="logo">
          <h1>
            <span>
              <BiSolidStore />
            </span>
            Furniture Store
          </h1>
        </div>

        <ul className={toggle ? "con-list con-list-open" : "con-list"}>
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

        <div
          className={toggle ? "hamburger hamburger-open" : "hamburger"}
          onClick={() => showMenu(!toggle)}
        >
          <div className={toggle ? "bar1 change-bar1" : "bar1"}></div>
          <div className={toggle ? "bar2 change-bar2" : "bar2"}></div>
          <div className={toggle ? "bar3 change-bar3" : "bar3"}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
