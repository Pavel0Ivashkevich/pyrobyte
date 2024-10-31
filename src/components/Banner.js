import React from 'react';
import '../styles/Banner.css';

const Banner = ({ children }) => {
  return (
    <div className='banner'>
      <img className='banner_img' src={`${process.env.PUBLIC_URL}/images/free.png`} alt='free'/>
      {children} 
    </div>
  );
};

export default Banner;

