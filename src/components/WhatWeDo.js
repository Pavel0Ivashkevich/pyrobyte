import React from 'react';

import '../styles/WhatWeDo.css';

const WhatWeDo = () => {
    const Card = ({ imgSrc, title, description }) => (
        <div className="advantag">
          <img src={imgSrc} alt={`${title} Icon`} />
          <h3>{title}</h3>
          <p className='advantage'>{description}</p>
        </div>
      );
    return (
    <div className='WhatWeDo'>
          
          <h1>What we do</h1>
          <p className='courier'>Express courier service in the city. We are a reliable logistics partner for delivery services for online stores and restaurants!</p>
          <div className='advantages'>
            
            <Card 
            imgSrc={`${process.env.PUBLIC_URL}/images/calculator.png`}
            title="Online calculation" 
            description="Instant calculation of the cost in the order form, the price is updated in the process of filling out the form"
            />
            <Card 
            imgSrc={`${process.env.PUBLIC_URL}/images/paperwork.png`}
            title="Minimum paperwork" 
            description="You can place an order for courier or freight delivery without registration and contract."
            />
            <Card 
            imgSrc= {`${process.env.PUBLIC_URL}/images/payment.png`}
            title="Convenient payment" 
            description="You can pay for delivery by card or in cash at any of the order addresses. For legal entities non-cash is available."
            />
          </div>
          <button>Get started!</button>
     </div>
 
    );
  };
  
  export default WhatWeDo ;