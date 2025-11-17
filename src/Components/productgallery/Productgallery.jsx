import React, { useState, useRef } from "react";
import "./Productgallery.scss";
import { useNavigate } from "react-router-dom";

const ProductGallery = ({ images }) => {
  return (
    <div className="gallery-slider-container">
      {images.map((imgSrc, idx) => (
        <Card key={idx} images={images} productId={idx + 1} />
      ))}
    </div>
  );
};

const Card = ({ images, productId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const navigate = useNavigate(); // React Router hook

  const startSlider = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);
    }
  };

  const stopSlider = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const goToSlide = (index) => setCurrentIndex(index);

  const handleClick = () => {
    navigate(`/detail-page/${productId}`);
  };

  return (
    <div
      className="gallery-card"
      onMouseEnter={startSlider}
      onMouseLeave={stopSlider}
      onClick={handleClick}   // ✅ click navigates to detail page
      style={{ cursor: "pointer" }}
    >
      <div className="image-wrapper">
        <img src={images[currentIndex]} alt="product" />

        <div className="btn-group">
          <button className="new">New</button>
          <button className="discount">-25%</button>
        </div>

        <div className="dots">
          {images.slice(0, 5).map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(idx)}
            ></span>
          ))}
        </div>
      </div>

      <p className="description">ONLINE EXCLUSIVE DISCOUNT</p>
      <p className="price">Rs. 3,499</p>
    </div>
  );
};

export default ProductGallery;
