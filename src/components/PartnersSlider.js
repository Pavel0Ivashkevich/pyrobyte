// src/components/PartnersSlider.js
import React from 'react';
import '../styles/PartnersSlider.css';

const PartnersSlider = () => {
  const partners = [
    { name: 'Alva', logo: `${process.env.PUBLIC_URL}/images/alva-logo.svg` },
    { name: 'Tendo', logo: `${process.env.PUBLIC_URL}/images/tendo-logo.svg` },
    { name: 'Fagor', logo: `${process.env.PUBLIC_URL}/images/fagor-logo.svg` },
    { name: 'RadioShack', logo: `${process.env.PUBLIC_URL}/images/radioshack-logo.svg` },
    { name: 'Guitar Center', logo: `${process.env.PUBLIC_URL}/images/guitarcenter-logo.svg` },
  ];

  return (
    <>
      <div className="separator">
        <div className="separator-line"></div>
        <img
          src={`${process.env.PUBLIC_URL}/images/separator-icon.png`}
          alt="Separator Icon"
          className="separator-icon"
        />
        <div className="separator-line"></div>
      </div>

      <div className="partners-section">
        <div className="Our">
          <h2>Our Partners</h2>
         
        </div>
        <button className="collaborate-button">
            <img
              src={`${process.env.PUBLIC_URL}/images/collaborate-icon.png`}
              alt="Collaborate Icon"
            />
            Let’s collaborate
          </button>
        <div className="partners-logos">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner.logo}
              alt={`${partner.name} Logo`}
              className="partner-logo"
            />
          ))}
        </div>
        
        <img
          className="Intersect"
          src={`${process.env.PUBLIC_URL}/images/Intersect.png`}
          alt="Intersect"
        />
      </div>
    </>
  );
};

export default PartnersSlider;
