import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Checkout.scss";

const Checkout = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);
  const [billingSame, setBillingSame] = useState(true);

  // Error states
  const [errors, setErrors] = useState({});

  // Cart data (tumhare localStorage se aayega baad mein)
  const cartItems = JSON.parse(localStorage.getItem("MY_CART_2025") || "[]");
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * (item.qty || 1), 0);
  const shipping = 149;
  const total = subtotal + shipping;

  const validateForm = () => {
    const newErrors = {};

    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";

    if (!firstName.trim()) newErrors.firstName = "First name is required";

    if (!address.trim()) newErrors.address = "Address is required";

    if (!city.trim()) newErrors.city = "City is required";

    if (!phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10,11}$/.test(phone.replace(/\D/g, "")))
      newErrors.phone = "Enter a valid phone number (e.g. 03001234567)";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCompleteOrder = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Order placed successfully! We'll call you to confirm.");
      // Yahan API call ya WhatsApp redirect kar sakte ho
    }
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        {/* Left Side - Form */}
        <div className="checkout-form-section">
          <div className="checkout-header">
            <h1>Contact</h1>
            <Link to="/login" className="signin-link">Sign in</Link>
          </div>

          <div className={`input-group ${errors.email ? "error" : ""}`}>
            <input
              type="email"
              placeholder="Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
          <p className="email-subtitle">Email me with news and offers</p>

          <h2 className="section-title">Delivery</h2>
          <select defaultValue="Pakistan" className="country-select">
            <option>Pakistan</option>
          </select>

          <div className="name-row">
            <div className={`input-group ${errors.firstName ? "error" : ""}`}>
              <input
                type="text"
                placeholder="First name *"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && <span className="error-text">{errors.firstName}</span>}
            </div>
            <input type="text" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>

          <div className={`input-group ${errors.address ? "error" : ""}`}>
            <input
              type="text"
              placeholder="Address *"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {errors.address && <span className="error-text">{errors.address}</span>}
          </div>

          <input
            type="text"
            placeholder="Apartment, suite, etc. (optional)"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <div className="city-postal-row">
            <div className={`input-group ${errors.city ? "error" : ""}`}>
              <input
                type="text"
                placeholder="City *"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              {errors.city && <span className="error-text">{errors.city}</span>}
            </div>
            <input type="text" placeholder="Postal code (optional)" />
          </div>

          <div className={`input-group ${errors.phone ? "error" : ""}`}>
            <input
              type="text"
              placeholder="Phone * (e.g. 03001234567)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <span className="error-text">{errors.phone}</span>}
          </div>

          <label className="save-info">
            <input type="checkbox" checked={saveInfo} onChange={(e) => setSaveInfo(e.target.checked)} />
            <span>Save this information for next time</span>
          </label>

          <h2 className="section-title">Shipping method</h2>
          <div className="shipping-option selected">
            <span>Shipping Charges</span>
            <strong>Rs. {shipping}</strong>
          </div>

          <h2 className="section-title">Payment</h2>
          <p className="payment-info">All transactions are secure and encrypted.</p>
          <div className="payment-method selected">
            <span>Cash on Delivery (COD)</span>
          </div>
          <p className="cod-note">
            DEAR CUSTOMER, YOU WILL RECEIVE AN SMS / CALL FROM SERVIS SHOES TO CONFIRM YOUR ORDER.
          </p>

          <h2 className="section-title">Billing address</h2>
          <div className="billing-options">
            <label className={`billing-option ${billingSame ? "selected" : ""}`}>
              <input type="radio" name="billing" checked={billingSame} onChange={() => setBillingSame(true)} />
              <span>Same as shipping address</span>
            </label>
            <label className={`billing-option ${!billingSame ? "selected" : ""}`}>
              <input type="radio" name="billing" checked={!billingSame} onChange={() => setBillingSame(false)} />
              <span>Use a different billing address</span>
            </label>
          </div>

          <button
            className="complete-order-btn"
            onClick={handleCompleteOrder}
            disabled={cartItems.length === 0}
          >
            Complete order
          </button>
        </div>

        {/* Right Side - Order Summary */}
        <div className="order-summary">
          <div className="summary-items">
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cartItems.map((item, index) => (
                <div key={`${item.id}-${index}`} className="summary-item">
                  <div className="item-image">
                    <img src={item.images?.[0] || "/placeholder.jpg"} alt={item.title} />
                    <span className="item-qty">{item.qty || 1}</span>
                  </div>
                  <div className="item-info">
                    <h4>
                      {item.title}
                      <br />
                      <span>
                        {item.color || "Grey"} / {item.size || "38"}
                      </span>
                    </h4>
                  </div>
                  <div className="item-price">
                    Rs. {(item.price * (item.qty || 1)).toLocaleString()}
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="summary-input">
            <input type="text" placeholder="Discount code or gift card" />
            <button>Apply</button>
          </div>

          <div className="summary-totals">
            <div className="total-row">
              <span>Subtotal</span>
              <span>Rs. {subtotal.toLocaleString()}</span>
            </div>
            <div className="total-row">
              <span>Shipping</span>
              <span>Rs. {shipping.toLocaleString()}</span>
            </div>
            <div className="total-row final">
              <strong>Total</strong>
              <strong>Rs. {total.toLocaleString()}</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="checkout-footer">
        <Link to="/">Refund policy</Link>
        <Link to="/">Shipping</Link>
        <Link to="/">Privacy policy</Link>
        <Link to="/">Terms of service</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Checkout;