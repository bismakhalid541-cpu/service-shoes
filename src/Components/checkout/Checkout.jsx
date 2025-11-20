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

  // Yeh state decide karega kon sa screen dikhega
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  // Error states
  const [errors, setErrors] = useState({});

  // Cart data
  const cartItems = JSON.parse(localStorage.getItem("MY_CART_2025") || "[]");
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * (item.qty || 1), 0);
  const shipping = 149;
  const total = subtotal + shipping;

  // Generate random order number
  const orderNumber = `SS${Date.now().toString().slice(-8)}`;

  // Expected delivery date (3 to 7 days from today)
  const getDeliveryDate = () => {
    const today = new Date();
    const minDays = 3;
    const maxDays = 7;
    const deliveryDays = Math.floor(Math.random() * (maxDays - minDays + 1)) + minDays;
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + deliveryDays);

    return deliveryDate.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const expectedDelivery = getDeliveryDate();

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
      // Order confirm → Thank You screen dikhao
      setOrderConfirmed(true);

      // Optional: Clear cart after order
      // localStorage.removeItem("MY_CART_2025");

      // WhatsApp message ready kar sakta hai
      const message = `New Order!\nName: ${firstName} ${lastName}\nPhone: ${phone}\nCity: ${city}\nAddress: ${address}\nTotal: Rs.${total.toLocaleString()}\nItems: ${cartItems.map(i => `${i.title} (x${i.qty})`).join(", ")}`;
      console.log("WhatsApp Message:", encodeURIComponent(message));
    }
  };

  // Agar order confirm ho gaya → Thank You Screen
  if (orderConfirmed) {
    return (
      <div className="thank-you-page">
        <div className="thank-you-container">
          <div className="thank-you-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>

          <h1>Thank You for Your Order!</h1>
          <p className="subtitle">Your order has been placed successfully</p>

          <div className="order-details">
            <div className="detail-row">
              <span>Order Number</span>
              <strong>{orderNumber}</strong>
            </div>
            <div className="detail-row">
              <span>Expected Delivery</span>
              <strong>{expectedDelivery}</strong>
            </div>
            <div className="detail-row">
              <span>Total Amount</span>
              <strong>Rs. {total.toLocaleString()}</strong>
            </div>
          </div>

          <div className="confirmation-message">
            <p>
              We have received your order and will call you shortly to confirm the details.
            </p>
            <p>
              You will receive an SMS confirmation on <strong>{phone}</strong>
            </p>
          </div>

          <div className="thank-you-actions">
            <Link to="/home">
              <button className="continue-shopping-btn">Continue Shopping</button>
            </Link>
            <Link to="/order" className="track-order-link">
              Track Your Order →
            </Link>
          </div>

          <div className="contact-support">
            <p>Need help? Call us at <strong>0300-111-7378</strong></p>
          </div>

          <a href="/"><button className="continue-shopping-btn">logout</button></a>
        </div>
      </div>
    );
  }

  // Pehle wala normal checkout form
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

          <div className={`input-group ${errors.city ? "error" : ""}`}>
            <input
              type="text"
              placeholder="City *"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            {errors.city && <span className="error-text">{errors.city}</span>}
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
            {cartItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className="summary-item">
                <div className="item-image">
                  <img src={item.images?.[0] || "/placeholder.jpg"} alt={item.title} />
                  <span className="item-qty">{item.qty || 1}</span>
                </div>
                <div className="item-info">
                  <h4>
                    {item.title}
                    <br />
                    <span>{item.color || "Grey"} / {item.size || "38"}</span>
                  </h4>
                </div>
                <div className="item-price">
                  Rs. {(item.price * (item.qty || 1)).toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          <div className="summary-totals">
            <div className="total-row">
              <span>Subtotal</span>
              <span>Rs. {subtotal.toLocaleString()}</span>
            </div>
            <div className="total-row">
              <span>Shipping</span>
              <span>Rs. {shipping}</span>
            </div>
            <div className="total-row final">
              <strong>Total</strong>
              <strong>Rs. {total.toLocaleString()}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;