
import React from 'react';
import Header from './components/Header.js';
import Banner from './components/Banner';
import OrderForm from './components/OrderForm';
import Service from './components/Service';
import PartnersSlider from './components/PartnersSlider';
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
      {/* <PartnersSlider />
      <PaymentMethods />
      <Footer /> */}
    </div>
  );
}

export default App;
