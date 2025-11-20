import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Detailinfo.scss";

const Detailinfo = () => {
  const { productId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("36");
  const [quantity, setQuantity] = useState(1);
  const [zoomedIndex, setZoomedIndex] = useState(null); // track which image is zoomed
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0); // for navbar badge


  if (!product) {
    return (
      <div>
        <Navbar />
        <div style={{ padding: "100px 20px", textAlign: "center" }}>
          <h2>Product not found</h2>
          <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="detail-page">
     

      <div className="detail-container">
        {/* LEFT - ALL IMAGES WRAPPED */}
        <div className="all-images-wrapper">
          {product.images.map((img, idx) => (
            <div
              key={idx}
              className={`image-box ${zoomedIndex === idx ? "zoomed" : ""}`}
              onClick={() => setZoomedIndex(zoomedIndex === idx ? null : idx)}
            >
              <img src={img} alt={`${product.title} ${idx + 1}`} />

              <span className="zoom-icon">
                {zoomedIndex === null ? (
                  // Magnifier + (zoom in)
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="10" cy="10" r="7" />
                    <line x1="15" y1="15" x2="21" y2="21" />
                    <line x1="6" y1="10" x2="14" y2="10" strokeWidth="2.5" />
                    <line x1="10" y1="6" x2="10" y2="14" strokeWidth="2.5" />
                  </svg>
                ) : (
                  // Magnifier - (zoom out)
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="10" cy="10" r="7" />
                    <line x1="15" y1="15" x2="21" y2="21" />
                    <line x1="6" y1="10" x2="14" y2="10" strokeWidth="2.5" />
                  </svg>
                )}
              </span>
            </div>
          ))}
        </div>

        {/* RIGHT - PRODUCT INFO */}
        <div className="info-section">
          <h1>{product.title}</h1>

          <div className="price-section">
            <span className="current-price">{product.price}</span>
            {product.originalPrice && (
              <span className="original-price">{product.originalPrice}</span>
            )}
          </div>

          <div className="color-section">
            <h3>COLOR</h3>
            <button className="color-btn selected">
              {product.color || "GREY"}
            </button>
          </div>

          <div className="size-chart-link">
            <a href="/size-guide">SIZE CHART</a>
          </div>

          <div className="size-section">
            <h3>SIZE</h3>
            <div className="size-grid">
              {["36", "37", "38", "39", "40", "41"].map((size) => (
                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? "selected" : ""}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="quantity-section">
            <h3>Quantity</h3>
            <div className="quantity-controls">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <button
            className="add-to-bag-btn"
            onClick={() => {
              setDrawerOpen(true);
              setCartCount(cartCount + 1);
            }}
          >
            ADD TO BAG
          </button>

        </div>
      </div>

     
    </div>
  );
};

export default Detailinfo;
