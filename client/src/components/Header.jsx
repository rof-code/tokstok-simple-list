import React from "react";
import "../assets/css/Header.css";
import tkLogo from "../assets/img/tokstok.svg";

const Header = () => {
  return (
    <div>
      <header className="tk__header">
        <div className="container">
          <img src={tkLogo} alt="" />
        </div>
      </header>
    </div>
  );
};

export default Header;
