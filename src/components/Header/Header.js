import React from "react";

import logo from "../../assets/logo.png";

import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <a href="/">
          <img src={logo} alt=""></img>
        </a>
        <nav>
          <ul>
            <li>
              <a href="#">Falcon 9</a>
            </li>
            <li>
              <a href="#">Falcon Heavy</a>
            </li>
            <li>
              <a href="#">Starship</a>
            </li>
            <li>
              <a href="#">Human Spaceflight</a>
            </li>
            <li>
              <a href="#">Rideshare</a>
            </li>
            <li>
              <a href="#">Starshield</a>
            </li>
            <li>
              <a href="#">Starlink</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
