import React from "react";
import "./Header.css";
import Logo from "./../../img/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="Logo" className="header__logo-img" />
      </div>
      <div className="header__search-wrapper">
        <input type="search" className="header__search" placeholder="search..."></input>
      </div>
    </header>
  );
};

export default Header;
