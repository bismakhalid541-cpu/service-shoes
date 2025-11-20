import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { X, Trash2 } from "lucide-react";
import "./Navbar.scss";

const Navbar = ({ cartTrigger = 0 }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [city, setCity] = useState("");
  const [mobile, setMobile] = useState("");
  const [agreed, setAgreed] = useState(false);

  // Cart real-time localStorage se load
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem("MY_CART_2025");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Jab bhi cartTrigger badhe → cart re-load karo (latest data milega)
  useEffect(() => {
    const saved = localStorage.getItem("MY_CART_2025");
    if (saved) {
      try {
        setCartItems(JSON.parse(saved));
      } catch (e) {
        setCartItems([]);
      }
    }
    // Trigger aane pe drawer kholo
    if (cartTrigger > 0) {
      setCartOpen(true);
    }
  }, [cartTrigger]);

  const isHome = ["/", "/home", "/Home"].includes(location.pathname);

  // Real-time count aur total
  const totalCount = cartItems.reduce((acc, item) => acc + (item.qty || 1), 0);
  const estimatedTotal = cartItems.reduce((acc, item) => acc + item.price * (item.qty || 1), 0);

  const incrementQty = (id, size, color) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.size === size && item.color === color
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  const decrementQty = (id, size, color) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.id === id && item.size === size && item.color === color
            ? { ...item, qty: Math.max(1, item.qty - 1) }
            : item
        )
        .filter(item => item.qty > 0)
    );
  };

  const removeItem = (id, size, color) => {
    setCartItems(prev =>
      prev.filter(item => !(item.id === id && item.size === size && item.color === color))
    );
  };

  return (
    <>
      <div className={`navbar-container ${isHome ? "home" : "other"}`}>
        <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </div>

        <div className="left">
          <Link to="/home">
            <img src="/logo.png" alt="logo" className="logo" />
          </Link>
          <nav className="desktop-nav">
            <ul>
              <li><Link to="/men">MEN</Link></li>
              <li><Link to="/women">WOMEN</Link></li>
              <li><Link to="/kids">KIDS</Link></li>
              <li><Link to="/sales">SALES</Link></li>
            </ul>
          </nav>
        </div>

        <div className="right">
          <p className="search-trigger">SEARCH</p>
          <div className="cart-wrapper" onClick={() => setCartOpen(true)}>
            <img src="/bag-carts-removebg-preview.png" alt="cart" />
            <span className="cart-badge">{totalCount}</span>
          </div>
        </div>
      </div>

      {/* Cart Drawer */}
      {cartOpen && (
        <>
          <div className="cart-overlay" onClick={() => setCartOpen(false)} />
          <div className="cart-sidebar">
            <div className="cart-header-sticky">
              <h2>Your cart</h2>
              <button onClick={() => setCartOpen(false)} className="close-btn">
                <X size={28} />
              </button>
            </div>

            <div className="cart-content">
              {cartItems.length === 0 ? (
                <div className="empty-cart">
                  <img src="/bag-carts-removebg-preview.png" alt="empty" />
                  <h3>Your cart is empty</h3>
                  <Link to="/sales" onClick={() => setCartOpen(false)}>
                    <button className="continue-btn">Continue Shopping</button>
                  </Link>
                </div>
              ) : (
                <>
                  <div className="products-header">
                    <span>PRODUCT</span>
                    <span>TOTAL</span>
                  </div>

                  <div className="cart-items">
                    {cartItems.map((item, index) => (
                      <div key={`${item.id}-${item.size}-${index}`} className="cart-item-row">
                        <div className="item-image">
                          <img src={item.images?.[0] || "/placeholder.jpg"} alt={item.title} />
                        </div>

                        <div className="item-details">
                          <h4>{item.title}</h4>
                          {item.originalPrice && (
                            <p className="old-price">Rs.{item.originalPrice.toLocaleString()}</p>
                          )}
                          <p className="current-price">Rs.{item.price.toLocaleString()}</p>

                          <div className="item-meta">
                            <span>SIZE: {item.size}</span>
                            <span>COLOR: {item.color}</span>
                          </div>

                          <div className="quantity-trash">
                            <div className="quantity-control">
                              <button onClick={() => decrementQty(item.id, item.size, item.color)}>-</button>
                              <span>{item.qty}</span>
                              <button onClick={() => incrementQty(item.id, item.size, item.color)}>+</button>
                            </div>
                            <button onClick={() => removeItem(item.id, item.size, item.color)} className="trash-btn">
                              <Trash2 size={20} />
                            </button>
                          </div>
                        </div>

                        <div className="item-total">
                          Rs.{(item.price * item.qty).toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="estimated-total">
                    <div className="total-row">
                      <strong>Estimated total</strong>
                      <strong>Rs.{estimatedTotal.toLocaleString()}</strong>
                    </div>
                    <p>Taxes, Discounts and shipping calculated at checkout</p>
                  </div>

                  <div className="checkout-form">
                    <select value={city} onChange={(e) => setCity(e.target.value)}>
                      <option value="">Select City</option>
                      <option>Karachi</option>
                      <option>Lahore</option>
                      <option>Islamabad</option>
                    </select>
                    <input
                      type="text"
                      placeholder="0300XXXXXXX"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>

                  <label className="terms-checkbox">
                    <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
                    <span>I agree with the terms and conditions.</span>
                  </label>

                  <button className="checkout-btn" disabled={!agreed || !city || !mobile}>
                    Check out
                  </button>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;