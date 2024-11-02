
import React from 'react';
import Header from './components/Header.js';
import Banner from './components/Banner';
import OrderForm from './components/OrderForm';
import Service from './components/Service';
import Express from './components/Express';
import PartnersSlider from './components/PartnersSlider';
import WhatWeDo from './components/WhatWeDo';
import PaymentMethods from './components/PaymentMethods';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner>
        <Service/>
        <OrderForm />
        </Banner>
        <Express/>
      <PartnersSlider />
      <WhatWeDo/>
      {/* // <PaymentMethods />
      // <Footer /> */} 
    </div>
  );
}

export default App;
