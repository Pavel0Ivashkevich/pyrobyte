// src/components/OrderForm.js
import React, { useState } from 'react';
// import './OrderForm.css';

const OrderForm = () => {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');

  return (
    <div className="order-form">
      <h3>Send a Parcel</h3>
      <div className="order-form__types">
        <button>Up to 10 lb</button>
        <button>Up to 130 lb</button>
        <button>Over 130 lb</button>
      </div>
      <input
        type="text"
        placeholder="Pickup location"
        value={pickup}
        onChange={(e) => setPickup(e.target.value)}
      />
      <input
        type="text"
        placeholder="Drop location"
        value={drop}
        onChange={(e) => setDrop(e.target.value)}
      />
      <button onClick={() => { setPickup(''); setDrop(''); }}>Clear All</button>
      <button className="order-form__submit">Order</button>
    </div>
  );
};

export default OrderForm;
