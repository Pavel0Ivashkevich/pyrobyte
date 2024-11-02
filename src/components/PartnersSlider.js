// src/components/PartnersSlider.js
import React from 'react';

import '../styles/PartnersSlider.css';

const PartnersSlider = () => {
    const partners = [
        { name: 'Alva', logo: '/images/alva-logo.svg' },
        { name: 'Tendo', logo: '/images/tendo-logo.svg' },
        { name: 'Fagor', logo: '/images/fagor-logo.svg' },
        { name: 'RadioShack', logo: '/images/radioshack-logo.svg' },
        { name: 'Guitar Center', logo: '/images/guitarcenter-logo.svg' },
      ];

  return (
    <>
    <div class="separator">
    <div class="separator-line"></div>
    <img src="/images/separator-icon.png" alt="Separator Icon" class="separator-icon" />
    <div class="separator-line"></div>
    </div>
<div className="partners-section">
      <div className="Our">
        <h2>Our Partners</h2>
        <button className="collaborate-button">
          <img src="/images/collaborate-icon.png" alt="Collaborate Icon" />
          Let’s collaborate
        </button>
      </div>
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
      <img className='Intersect' src={`${process.env.PUBLIC_URL}/images/Intersect.png`} alt="Intersect" />
    </div>
</>
  );
};

export default PartnersSlider;
