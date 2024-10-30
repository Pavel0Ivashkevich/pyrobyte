import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={`${process.env.PUBLIC_URL}/images/Logo.png`} alt="Logo" />
        
        <div className="header__location">
          <img src={`${process.env.PUBLIC_URL}/images/Pin.png`} alt="Location Pin" />
          NY, Manhattan
        </div>
      </div>
      
      
      <div className="header__track-wrapper">
        <input 
          type="text" 
          className="header__track" 
          placeholder="Track a Package" 
        />
        <img 
          src={`${process.env.PUBLIC_URL}/images/search-icon.png`} 
          alt="Search Icon" 
          className="header__track-icon" 
        />
      </div>

      {/* Навигация */}
      <nav className="header__nav">
        <a href="/" className='nav_chld'>Send a Parcel</a>
        <a href="/" className='nav_chld2'>Become a Courier</a>
        <div className='log'> 
          <img src={`${process.env.PUBLIC_URL}/images/Login.png`} alt='login'/> 
        </div>
        
      </nav>
    </header>
  );
};

export default Header;
