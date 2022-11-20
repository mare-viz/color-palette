import React from "react";

export const Header = ({ color }) => {
  return (
    <div className="header">
      <div className="header__logo" style={{ color: color }}>
        Color-PaleTTe
      </div>
      <nav className="header__nav">
        <a href="/" className="nav__item" style={{ color: color }}>
          Repos
        </a>
      </nav>
    </div>
  );
};

export default Header;
