// src/components/Header.js
import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
      <img src= {`${process.env.PUBLIC_URL}/images/Logo.png`} alt="Logo" />
      </div>
      <div className="header__location">NY, Manhattan</div>
      <nav className="header__nav">
        <a href="/">Track a Package</a>
        <a href="/">Send a Parcel</a>
        <a href="/">Become a Courier</a>
      </nav>
    </header>
  );
};

export default Header;
