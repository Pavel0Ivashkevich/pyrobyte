import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='footer-comtainer'>
        <nav className='about'>
        <h3>ABOUT WHOOSH</h3>
        </nav>
        <nav className='menu'>
        <h3>MENU</h3>
        </nav>
        <nav className='services'>
        <h3>SERVICES</h3>
        </nav>
        <nav className='contact'>
            <h3>CONTACT US</h3>
        </nav>
      </div>
    </footer >
  );
};

export default Footer;
