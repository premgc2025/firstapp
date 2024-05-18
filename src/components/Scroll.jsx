
import React, { useState } from 'react';
// import './ScrollingBanner.css';

const Scroll = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="scrolling-banner-container">
      <button className="scrolling-banner-button prev" onClick={prevImage}>Prev </button>
      <div className="scrolling-banner">
        <div className="scrolling-images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div className="scrooling-images-div">
            <img key={index} src={image} alt={`image${index}`} />
            </div>
          ))}
        </div>
      </div>
      <button className="scrolling-banner-button next" onClick={nextImage}>
        Next
      </button>
    </div>
  );
};

export default Scroll;
