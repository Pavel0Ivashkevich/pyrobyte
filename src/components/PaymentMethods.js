import React, { useState, useEffect } from 'react';
import '../styles/PaymentMethods.css';

const PaymentMethods = () => {
  const images = [
    `${process.env.PUBLIC_URL}/images/google.png`,
    `${process.env.PUBLIC_URL}/images/sofort.png`,
    `${process.env.PUBLIC_URL}/images/union.png`,
    `${process.env.PUBLIC_URL}/images/visa.png`,
    `${process.env.PUBLIC_URL}/images/master.png`,
    `${process.env.PUBLIC_URL}/images/amex.png`
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState([]);

  const updateVisibleImages = () => {
    const containerWidth = document.querySelector('.image-container').offsetWidth;
    const imageWidth = 84; 
    const gap = 84; 
    const totalWidth = imageWidth + gap; 

    const imagesToShow = Math.max(3, Math.floor(containerWidth / totalWidth)); 

    const adjustedIndex = (currentIndex + images.length) % images.length; 

    
    const newVisibleImages = [];
    for (let i = 0; i < imagesToShow; i++) {
      newVisibleImages.push(images[(adjustedIndex + i) % images.length]);
    }

    setVisibleImages(newVisibleImages);
  };

  useEffect(() => {
    window.addEventListener('resize', updateVisibleImages);
    updateVisibleImages(); 
    return () => {
      window.removeEventListener('resize', updateVisibleImages);
    };
  }, [currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    updateVisibleImages(); 
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    updateVisibleImages(); 
  };

  return (
    <div className='PaymentMethods'>
      <h1>Payment methods</h1>
      <div className='Pay'>
        <button className='arrow left' onClick={prevImage}>&lt;</button>
        <div className='image-container'>
          {visibleImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Payment Method ${index + currentIndex + 1}`}
              className='image'
            />
          ))}
        </div>
        <button className='arrow right' onClick={nextImage}>&gt;</button>
      </div>
    </div>
  );
};

export default PaymentMethods;
