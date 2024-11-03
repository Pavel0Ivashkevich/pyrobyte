import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='footer-container'>
        <div className='about'>
        <h3 className='about-title'>ABOUT WHOOSH</h3>
        <div className='about-container'>
        <img src={`${process.env.PUBLIC_URL}/images/pins.png`} alt="pins" />
        <p>Express delivery of documents and parcels for organizations, express delivery of correspondence, purchases and other goods</p>
        </div>
        </div>
        <nav className='menu'>
        <h3>MENU</h3>
        <ul>
          <li>About company</li>
          <li>Contact</li>
          <li>Rules</li>
          <li>FAQ</li>
          <li>Reviews</li>
          <li>Cargo transportation</li>
          <li>Tariffs</li>
        </ul>
        </nav>
        <nav className='services'>
        <h3>SERVICES</h3>
        <ul>
          <li>Online stores</li>
          <li>Legal entity</li>
          <li>API Integration</li>
          <li>Contract</li>
          <li>Jobs</li>
          <li>Courier job</li>
          <li>The blog</li>
        </ul>

        </nav>
        <nav className='contact'>
            <h3>CONTACT US</h3>
            <h2>8 800 934 5959</h2>
            <div className='adress-container'>
        <img src={`${process.env.PUBLIC_URL}/images/pin-blue.png`} alt="pin-blue" />
        <p>2545 W. Diversey Ave.<br/>
          3rd Floor Chicago, IL 60647</p>
        </div>
        <div className='social'>
        <img src={`${process.env.PUBLIC_URL}/images/facebook.png`} alt="facebook" />
        <img src={`${process.env.PUBLIC_URL}/images/vk.png`} alt="vk" />
        <img src={`${process.env.PUBLIC_URL}/images/youtube.png`} alt="youtube" />
        <img src={`${process.env.PUBLIC_URL}/images/instagram.png`} alt="instagram" />
        </div>
        </nav>
      </div>
      <div class="separator-f">
    <div class="separator-line-f"></div>
    <p alt="Separator Icon" class="separator-icon-f">Made by </p>
    <div class="separator-line-f"></div>
    </div>
    <div className='Made_by'>
      <p>© 2022. All rights reserved.</p>
      <img src={`${process.env.PUBLIC_URL}/images/pyro_logo.png`} alt="pyro_logo" />
      <p className='privacy'> <img src={`${process.env.PUBLIC_URL}/images/shield.png`} alt="shield" /> Privacy policy</p>
    </div>
    </footer >
  );
};

export default Footer;
