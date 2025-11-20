import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { X, Trash2 } from "lucide-react";
import "./Navbar.scss";

const Navbar = ({ cartTrigger = 0 }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);        // ← Naya state
  const [searchQuery, setSearchQuery] = useState("");        // ← Naya state
  const [city, setCity] = useState("");
  const [mobile, setMobile] = useState("");
  const [agreed, setAgreed] = useState(false);

  // Cart from localStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem("MY_CART_2025");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    const saved = localStorage.getItem("MY_CART_2025");
    if (saved) {
      try {
        setCartItems(JSON.parse(saved));
      } catch {
        setCartItems([]);
      }
    }
    if (cartTrigger > 0) {
      setCartOpen(true);
    }
  }, [cartTrigger]);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("MY_CART_2025", JSON.stringify(cartItems));
  }, [cartItems]);

  const isHome = ["/", "/home", "/Home"].includes(location.pathname);

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

  const closeAll = () => {
    setMenuOpen(false);
    setCartOpen(false);
    setSearchOpen(false);           // ← Search bhi close ho jayega jab background click karega
  };

  // Search functions
  const toggleSearch = () => {
    setSearchOpen(prev => !prev);
    if (!searchOpen) setSearchQuery("");   // Open karte waqt query clear
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // Yahan tu apna actual search logic laga sakta hai, jaise navigate(`/search?q=${searchQuery}`)
      // window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
      setSearchOpen(false);
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <div className={`navbar-container ${isHome ? "home" : "other"}`}>
        {/* Hamburger */}
        <div
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </div>

        {/* Left */}
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

        {/* Right */}
        <div className="right">
          {/* SEARCH TRIGGER */}
          <p className="search-trigger" onClick={toggleSearch}>
            SEARCH
          </p>

          <div className="cart-wrapper" onClick={() => setCartOpen(true)}>
            <img src="/bag-carts-removebg-preview.png" alt="cart" />
            <span className="cart-badge">{totalCount}</span>
          </div>
        </div>
      </div>
         {/* ==================== FULL SCREEN SEARCH OVERLAY ==================== */}
      {searchOpen && (
        <div className="search-overlay-fullscreen" onClick={toggleSearch}>
          <div className="search-overlay-content" onClick={(e) => e.stopPropagation()}>

           

            {/* Search Form */}
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                placeholder="Search for products, brands, categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />

              <button type="submit" className="search-btn">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </button>
            </form>
 {/* Close Button – ab andar hai aur perfectly positioned */}
            <button className="close-btn" onClick={toggleSearch}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* RICH MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={closeAll}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <img src="/logo.png" alt="logo" className="mobile-logo" />
              <ul>
                <li><Link to="/men">MEN</Link></li>
                <li><Link to="/women">WOMEN</Link></li>
                <li><Link to="/kids">KIDS</Link></li>
                <li><Link to="/sales">SALES</Link></li>
              </ul>
              <button onClick={() => setMenuOpen(false)} className="close-menu-btn">
                <X size={28} />
              </button>
            </div>

            <ul className="mobile-menu-links">
              <li className="highlight"><Link to="/sales" onClick={closeAll}>SALE</Link></li>
              <li className="highlight"><Link to="/sales/flat-40-off" onClick={closeAll}>FLAT 40% OFF</Link></li>
              <li><Link to="/apparel" onClick={closeAll}>APPAREL</Link></li>
              <li><Link to="/new-arrivals" onClick={closeAll}>NEW ARRIVALS</Link></li>

              <li>
                <Link to="/shoes" onClick={closeAll}>SHOES</Link>
                <ul className="submenu">
                  <li><Link to="/men" onClick={closeAll}>ATHLEISURE</Link></li>
                  <li><Link to="/men" onClick={closeAll}>FORMAL</Link></li>
                  <li><Link to="/men" onClick={closeAll}>MOCCS</Link></li>
                  <li><Link to="/men" onClick={closeAll}>CASUAL</Link></li>
                  <li><Link to="/men" onClick={closeAll}>BOOTS</Link></li>
                  <li><Link to="/men" onClick={closeAll}>CHAPPAL</Link></li>
                  <li><Link to="/men" onClick={closeAll}>SANDAL</Link></li>
                  <li><Link to="/men" onClick={closeAll}>PESHAWARI</Link></li>
                </ul>
              </li>

              <li><Link to="/accessories" onClick={closeAll}>ACCESSORIES</Link></li>
              <li><Link to="/premium-collection" onClick={closeAll}>PREMIUM COLLECTION</Link></li>
              <li><Link to="/leather-shoes" onClick={closeAll}>LEATHER SHOES</Link></li>
              <li><Link to="/order" onClick={closeAll}>TRACK YOUR ORDER</Link></li>
            </ul>

            <div className="mobile-menu-footer">
              {totalCount > 0 ? (
                <div className="cart-link" onClick={() => { setCartOpen(true); setMenuOpen(false); }}>
                  <span>My Cart ({totalCount})</span>
                  <strong>View Cart →</strong>
                </div>
              ) : (
                <p className="no-account">Have an account? <span>Login</span></p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CART DRAWER */}
      {cartOpen && (
        <>
          <div className="cart-overlay" onClick={() => setCartOpen(false)} />
          <div className="cart-sidebar">
            <div className="cart-header-sticky">
              <h2>Your cart {totalCount > 0 && `(${totalCount})`}</h2>
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
                      <div key={`${item.id}-${item.size}-${item.color}-${index}`} className="cart-item-row">
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
                    <select value={city} onChange={(e) => setCity(e.target.value)} required>
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
                      required
                    />
                  </div>

                  <label className="terms-checkbox">
                    <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
                    <span>I agree with the terms and conditions.</span>
                  </label>

                  <a href="/info-section">
                    <button className="checkout-btn" disabled={!agreed || !city || !mobile}>
                      Check out
                    </button>
                  </a>
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