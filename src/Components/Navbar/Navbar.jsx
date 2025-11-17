// // Navbar.tsx
// import React from "react";
// import { useLocation } from "react-router-dom";
// import "./Navbar.scss";

// const Navbar = () => {
//   const location = useLocation();

//   // Change text color based on route
//   const textColor = location.pathname === "/" ? "white" : "black";

//   return (
//     <div className="navbar-container">
//       <div className="left">
//         <img src="/logo.png" alt="logo" />
//         <nav>
//           <ul>
//             <li>
//               <a href="/men" style={{ color: textColor }}>Men</a>
//             </li>
//             <li>
//               <a href="/women" style={{ color: textColor }}>Women</a>
//             </li>
//             <li>
//               <a href="/kids" style={{ color: textColor }}>Kids</a>
//             </li>
//             <li>
//               <a href="/sales" style={{ color: textColor }}>Sales</a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       <div className="right">
//         <p style={{ color: textColor }}>Search</p>
//         <img src="/lockk.png" alt="lock" />
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const location = useLocation();

  // Check if we are on homepage
  const isHome = location.pathname === "/";

  return (
    <div className={`navbar-container ${isHome ? "home" : "other"}`}>
      <div className="left">
        <img src="/logo.png" alt="logo" />
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
        <p>Search</p>
        <img src="/lockk.png" alt="lock" />
      </div>
    </div>
  );
};

export default Navbar;
