import React, { useState } from 'react';
import '../styles/OrderForm.css';

const OrderForm = () => {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [selectedWeight, setSelectedWeight] = useState('up to 130 lb');

  const handleWeightSelection = (weight) => {
    setSelectedWeight(weight);
  };

  return (
    <div className="order">
    <div className="order-form">
      <h3>Send a Parcel 
        <img src={`${process.env.PUBLIC_URL}/images/i.png`} alt="info icon" />
      </h3>
      <div className="order-form__types">
        <button 
          className={selectedWeight === 'up to 10 lb' ? 'active' : ''} 
          onClick={() => handleWeightSelection('up to 10 lb')}
        >
          <img src={`${process.env.PUBLIC_URL}/images/up10.png`} alt='up10'/>
          up to 10 lb
        </button>
        <button 
          className={selectedWeight === 'up to 130 lb' ? 'active' : ''} 
          onClick={() => handleWeightSelection('up to 130 lb')}
        >
          <img src={`${process.env.PUBLIC_URL}/images/up130.png`} alt='up130'/>
          up to 130 lb
        </button>
        <button 
          className={selectedWeight === 'over 130 lb' ? 'active' : ''} 
          onClick={() => handleWeightSelection('over 130 lb')}
        >
          <img src={`${process.env.PUBLIC_URL}/images/over130.png`} alt='over130'/>
          over 130 lb
        </button>
      </div>
      <div className='container'>
      <img 
          src={`${process.env.PUBLIC_URL}/images/icon.png`} 
          alt="Icon" 
          className="icon" 
        />
<div className='Pickup'>
      <p className='location'>Pickup location</p>
      <input
        type="text"
        placeholder="location"
        value={pickup}
        onChange={(e) => setPickup(e.target.value)}
      />
      <p className='location drop_loc'>Drop location</p>
      <input
        type="text"
        placeholder="Drop location"
        value={drop}
        onChange={(e) => setDrop(e.target.value)}
      />
</div>
</div>
      <button className="order-form__submit">Order</button>
      <button className="clear-all" onClick={() => { setPickup(''); setDrop(''); }}>&#10006; Clear All</button>
    </div>
    <div className='track'>
    <h1 className='loc'>Track a package </h1>
    <div className="track-wrapper">
        <input 
          type="text" 
          className="track_pcg" 
          placeholder="Enter code" 
        />
        <img 
          src={`${process.env.PUBLIC_URL}/images/search-icon.png`} 
          alt="Search Icon" 
          className="track-icon" 
        />
      </div>
    </div>
</div>    
  );
};

export default OrderForm;
