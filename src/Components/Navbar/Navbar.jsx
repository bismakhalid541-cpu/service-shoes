import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ cartCount = 0 }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // YE LINE FIX KI HAI — AB SAB CASES COVER HAIN
  const isHome = ["/", "/home", "/Home"].includes(location.pathname);

  // Cart items (empty for now)
  const cartItems = [];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    setSearchQuery("");
  };
  const toggleCart = () => setCartOpen(prev => !prev);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      setSearchOpen(false);
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* NAVBAR - Ab hamesha sahi background dikhega */}
      <div className={`navbar-container ${isHome ? "home" : "other"}`}>
        {/* Hamburger Menu Icon */}
        <div
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggleMenu()}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Left Side - Logo & Nav */}
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

        {/* Right Side - Search & Cart */}
        <div className="right">
          <p onClick={toggleSearch} className="search-trigger">SEARCH</p>
          <div className="cart-wrapper" onClick={toggleCart}>
            <img src="/bag-carts-removebg-preview.png" alt="cart" />
            <span className="cart-badge">{cartItems.length}</span>
          </div>
        </div>
      </div>

      {/* Baaki sab same — mobile menu, search, cart */}
      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <img src="/logo.png" alt="logo" className="mobile-logo" />
              <ul>
                <li><Link to="/men" onClick={closeMenu}>MEN</Link></li>
                <li><Link to="/women" onClick={closeMenu}>WOMEN</Link></li>
                <li><Link to="/kids" onClick={closeMenu}>KIDS</Link></li>
                <li><Link to="/sales" onClick={closeMenu}>SALE</Link></li>
              </ul>
              <button onClick={closeMenu} className="close-menu-btn">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <ul className="mobile-menu-links">
              <li className="highlight"><Link to="/sales/flat-40-off" onClick={closeMenu}>SALE</Link></li>
              <li className="highlight"><Link to="/sales/flat-40-off" onClick={closeMenu}>FLAT 40% OFF</Link></li>

              <li><Link to="/apparel" onClick={closeMenu}>APPAREL</Link></li>
              <li><Link to="/new-arrivals" onClick={closeMenu}>NEW ARRIVALS</Link></li>

              <li>
                <Link to="/shoes" onClick={closeMenu}>SHOES</Link>
                <ul className="submenu">
                  <li><Link to="/women" onClick={closeMenu}>ATHLEISURE</Link></li>
                  <li><Link to="/women" onClick={closeMenu}>FORMAL</Link></li>
                  <li><Link to="/women" onClick={closeMenu}>MOCCS</Link></li>
                  <li><Link to="/women" onClick={closeMenu}>CASUAL</Link></li>
                  <li><Link to="/women" onClick={closeMenu}>BOOTS</Link></li>
                  <li><Link to="/women" onClick={closeMenu}>CHAPPAL</Link></li>
                  <li><Link to="/women" onClick={closeMenu}>SANDAL</Link></li>
                  <li><Link to="/women" onClick={closeMenu}>PESHAWARI</Link></li>
                </ul>
              </li>

              <li><Link to="/accessories" onClick={closeMenu}>ACCESSORIES</Link></li>
              <li><Link to="/premium-collection" onClick={closeMenu}>PREMIUM COLLECTION</Link></li>
              <li><Link to="/leather-shoes" onClick={closeMenu}>LEATHER SHOES</Link></li>
              <li><Link to="/order" onClick={closeMenu}>TRACK YOUR ORDER</Link></li>
            </ul>

            <div className="mobile-menu-footer">
              {cartItems.length > 0 ? (
                <Link to="/cart" onClick={closeMenu} className="cart-link">
                  <span>My Cart ({cartItems.length})</span>
                  <strong>View Cart</strong>
                </Link>
              ) : (
                <p className="no-account">
                  Have an account?  <span>Login</span>
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Search & Cart Overlays - same as before */}
      {searchOpen && (
        <div className="search-overlay-fullscreen">
          <div className="search-overlay-content">
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                placeholder="Search for products, brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button type="submit" className="search-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </button>
            </form>
            <button className="close-btn" onClick={toggleSearch}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {cartOpen && (
        <div className="cart-dropdown-overlay" onClick={() => setCartOpen(false)}>
          <div className="cart-dropdown" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <h3>My Cart {cartItems.length > 0 && <span>({cartItems.length})</span>}</h3>
              <button onClick={() => setCartOpen(false)}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <div className="empty-cart-icon">
                  <img src="/bag-carts-removebg-preview.png" alt="empty cart" />
                </div>
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added anything yet.</p>
                <Link to="/sales">
                  <button className="continue-shopping-btn" onClick={() => setCartOpen(false)}>
                    Continue Shopping
                  </button>
                </Link>
              </div>
            ) : (
              <div>Filled cart content here...</div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;