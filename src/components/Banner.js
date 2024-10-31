import React from 'react';
import '../styles/Banner.css';

const Banner = () => {
  return (
   <div className='banner'>
    <img src={`${process.env.PUBLIC_URL}/images/free.png`} alt='free'/>
   </div>
  );
};

export default Banner;
