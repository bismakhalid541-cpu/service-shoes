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

  const [selectedSize, setSelectedSize] = useState("38");
  const [quantity, setQuantity] = useState(1);
  const [zoomedIndex, setZoomedIndex] = useState(null);
  const [cartTrigger, setCartTrigger] = useState(0);

  // Review Drawer State
  const [reviewDrawerOpen, setReviewDrawerOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [qualityRating, setQualityRating] = useState(0);

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

  const handleAddToBag = (e) => {
    e.preventDefault();

    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      originalPrice: product.originalPrice || null,
      images: product.images,
      size: selectedSize,
      color: product.color || "GREY",
      qty: quantity,
    };

    let cart = [];
    const saved = localStorage.getItem("MY_CART_2025");
    if (saved) {
      try {
        cart = JSON.parse(saved);
      } catch (e) {
        cart = [];
      }
    }

    const existsIndex = cart.findIndex(
      (item) =>
        item.id === cartItem.id &&
        item.size === cartItem.size &&
        item.color === cartItem.color
    );

    if (existsIndex !== -1) {
      cart[existsIndex].qty += quantity;
    } else {
      cart.push(cartItem);
    }

    localStorage.setItem("MY_CART_2025", JSON.stringify(cart));
    setCartTrigger((prev) => prev + 1);
  };

  // Handle Review Submission
  const handleSubmitReview = (e) => {
    e.preventDefault();
    
    // Validation
    if (rating === 0) {
      alert("Please select an overall rating");
      return;
    }
    
    if (qualityRating === 0) {
      alert("Please select a quality rating");
      return;
    }
    
    alert("Thank you for your review! It has been submitted successfully.");
    
    // Reset all states
    setRating(0);
    setQualityRating(0);
    setReviewDrawerOpen(false);
  };

  return (
    <div className="detail-page">
      <Navbar cartTrigger={cartTrigger} />

      {/* ================= SERVIS SHOES EXACT REVIEW DRAWER ================= */}
      {reviewDrawerOpen && (
        <div className="review-drawer-overlay" onClick={() => setReviewDrawerOpen(false)}>
          <div className="servis-review-drawer" onClick={(e) => e.stopPropagation()}>
            <button className="close-review-btn" onClick={() => setReviewDrawerOpen(false)}>
              ×
            </button>

            <div className="review-logo">
              <img src="/logo.png" alt="logo" className="logo" />
            </div>

            <h2>Share Photos/Videos & Help Others</h2>

            <div className="review-product">
              <img src={product.images[0]} alt={product.title} />
              <div>
                <p className="product-title">{product.title}</p>
                <div className="star-rating">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmitReview}>
              <div className="form-group">
                <label>Overall Rating <span className="required">*</span></label>
                <div className="stars-large">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span 
                      key={star} 
                      className={`star-large ${star <= (hoverRating || rating) ? 'filled' : ''}`}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      style={{ 
                        color: star <= (hoverRating || rating) ? '#ffbf00' : '#ddd',
                        cursor: 'pointer'
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Review Title <span className="required">*</span></label>
                <input type="text" placeholder="Give your review a title" required />
              </div>

              <div className="form-group">
                <label>Share your feedback about {product.title}</label>
                <textarea rows="5" placeholder="Write your review here..."></textarea>
              </div>

              <div className="form-group upload-box">
                <div className="upload-area">
                  <span>Share Photos/Videos & Help Others</span>
                  <p>Add Photo or Video</p>
                  <button type="button" className="upload-btn">
                    <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 4l4 4h-4V4z"/></svg>
                    Choose File
                  </button>
                </div>
              </div>

              <div className="form-group inline">
                <label>Would You Recommend This Product? <span className="required">*</span></label>
                <div className="radio-group">
                  <label><input type="radio" name="recommend" required /> Yes</label>
                  <label><input type="radio" name="recommend" required /> No</label>
                </div>
              </div>

              <div className="form-group">
                <label>Quality <span className="required">*</span></label>
                <div className="quality-scale">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <label key={n}>
                      <input 
                        type="radio" 
                        name="quality" 
                        value={n} 
                        checked={qualityRating === n}
                        onChange={() => setQualityRating(n)}
                        hidden 
                      />
                      <span 
                        style={{
                          backgroundColor: qualityRating === n ? '#000' : 'transparent',
                          color: qualityRating === n ? '#fff' : '#000'
                        }}
                      >
                        {n}
                      </span>
                    </label>
                  ))}
                </div>
                <div className="scale-labels">
                  <span>Poor</span>
                  <span>Excellent</span>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>First Name <span className="required">*</span></label>
                  <input type="text" placeholder="First name" required />
                </div>
                <div className="form-group">
                  <label>Last name</label>
                  <input type="text" placeholder="Last name" />
                </div>
              </div>

              <div className="form-group">
                <label>Email <span className="required">*</span></label>
                <input type="email" placeholder="example@email.com" required />
              </div>

              <button type="submit" className="submit-review-full-btn">
                Agree & Submit Review
              </button>
            </form>

            <p className="terms-note">
              By continuing, you agree to our <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>.
            </p>
          </div>
        </div>
      )}

      {/* ================= MAIN PRODUCT DETAIL ================= */}
      <div className="detail-container">
        <div className="all-images-wrapper">
          {product.images.map((img, idx) => (
            <div
              key={idx}
              className={`image-box ${zoomedIndex === idx ? "zoomed" : ""}`}
              onClick={() => setZoomedIndex(zoomedIndex === idx ? null : idx)}
            >
              <img src={img} alt={`${product.title} ${idx + 1}`} />
            </div>
          ))}
        </div>

        <div className="info-section">
          <h1>{product.title}</h1>

          <div 
            className="review" 
            onClick={() => setReviewDrawerOpen(true)}
            style={{ cursor: "pointer" }}
          >
            write a review
          </div>

          <div className="price-section">
            <span className="regular-price">
              Rs. {product.regularprice?.toLocaleString()}
            </span>
            <span className="current-price">
              Rs. {product.price.toLocaleString()}
            </span>

            {product.originalPrice && (
              <span className="original-price">
                Rs. {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          <div className="id">
            <p>{product.id}</p>
          </div>

          <div className="color-section">
            <h3>COLOR</h3>
            <button className="color-btn selected">
              {product.color || "GREY"}
            </button>
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
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <button className="add-to-bag-btn" onClick={handleAddToBag}>
            ADD TO BAG
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detailinfo;