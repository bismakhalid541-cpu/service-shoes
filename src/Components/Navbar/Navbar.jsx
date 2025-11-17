import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const isHome = location.pathname === "/";

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    setSearchQuery("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // Yahan aap search functionality add kar sakte hain
      setSearchOpen(false);
    }
  };

  return (
    <>
      <div className={`navbar-container ${isHome ? "home" : "other"}`}>
        {/* Menu icon on top-left */}
        <div
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") toggleMenu();
          }}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </div>

        <div className="left">
          <img src="/logo.png" alt="logo" className="logo" />
          <nav>
            <ul>
              <li>
                <a href="/men">Men</a>
              </li>
              <li>
                <a href="/women">Women</a>
              </li>
              <li>
                <a href="/kids">Kids</a>
              </li>
              <li>
                <a href="/sales">Sales</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="right">
          <p onClick={toggleSearch} className="search-trigger">
            SEARCH
          </p>
          <img src="/bag-carts-removebg-preview.png" alt="cart" />
        </div>
      </div>

      {/* Full Screen Search Overlay */}
      {searchOpen && (
        <div className="search-overlay-fullscreen">
          <div className="search-overlay-content">
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button type="submit" className="search-btn">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </button>
            </form>
            
            <button className="close-btn" onClick={toggleSearch}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;