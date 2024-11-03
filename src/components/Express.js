import React from 'react';
import '../styles/Express.css';

const ExpressDeliverySection = () => {
  return (
    <div className="express-delivery-section">
      <h1 className="title">Express delivery market revolution</h1>
      <p className="subtitle">
        Express courier service in the city. We are a reliable logistics partner for delivery services for online stores and restaurants!
      </p>
      
      <div className="cards-container">
        <Card 
          imgSrc={`${process.env.PUBLIC_URL}/images/courier-icon.png`} 
          title="Become a Courier" 
          description="You choose a schedule. You decide how much and when to earn. Earnings from day one."
        />
        <Card 
          imgSrc={`${process.env.PUBLIC_URL}/images/help.png`} 
          title="Help & Support" 
          description="Door-to-door delivery in 90 minutes or at your convenience"
        />
        <Card 
          imgSrc={`${process.env.PUBLIC_URL}/images/affliate.png`} 
          title="Affiliate Program" 
          description="Use our service and feel new quality of this traditional service!"
        />
      </div>
   </div>
  );
};


const Card = ({ imgSrc, title, description }) => (
  <div className="card">
    
    <h3>{title}</h3>
    <img src={imgSrc} alt={`${title} Icon`} />
    <p>{description}</p>
  </div>
);

export default ExpressDeliverySection;
