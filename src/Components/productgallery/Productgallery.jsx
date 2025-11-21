import React, { useState, useRef } from "react";
import "./Productgallery.scss";
import { useNavigate } from "react-router-dom";

const ProductGallery = ({ products }) => {
  return (
    <div className="gallery-slider-container">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

const Card = ({ product }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const navigate = useNavigate();

  const startSlider = () => {
    if (!intervalRef.current && product.images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % product.images.length);
      }, 3000);
    }
  };

  const stopSlider = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleClick = () => {
    navigate(`/detail-page/${product.id}`, { 
      state: { product } 
    });
  };

  const handleDotClick = (e, index) => {
    e.stopPropagation();
    goToSlide(index);
  };

  return (
    <div
      className="gallery-card"
      onMouseEnter={startSlider}
      onMouseLeave={stopSlider}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="image-wrapper">
        <img src={product.images[currentIndex]} alt={product.title} />

        <div className="btn-group">
          {product.isNew && <button className="new">New</button>}
          {product.discount && <button className="discount">{product.discount}</button>}
        </div>

        {product.images.length > 1 && (
          <div className="dots">
            {product.images.slice(0, 5).map((_, idx) => (
              <span
                key={idx}
                className={`dot ${idx === currentIndex ? "active" : ""}`}
                onClick={(e) => handleDotClick(e, idx)}
              ></span>
            ))}
          </div>
        )}
      </div>

      <p className="description">{product.title}</p>
      <div className="info">
        <p className="name-section">{product.name}</p>
        <div className="price-section">
          <p className="regular-price">{product.regularprice}</p>
          <p className="price">{product.price}</p>
          
         
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;