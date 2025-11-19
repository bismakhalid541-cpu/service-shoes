// import React, { useState } from "react";
// import "./Footer.scss";
// import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaSnapchat } from "react-icons/fa";

// const Footer = () => {
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (email) {
//       alert("Thank you for subscribing!");
//       setEmail("");
//     }
//   };

//   return (
//     <footer className="footer">
//       {/* 🔥 Newsletter Section */}
//       <div className="newsletter-section">
//         <h2>JOIN OUR NEWSLETTER</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="input-wrapper">
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <button type="submit" className="submit-btn">
//               <svg viewBox="0 0 24 24" fill="none">
//                 <path
//                   d="M5 12H19M19 12L12 5M19 12L12 19"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                 />
//               </svg>
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Original Footer */}
//       <div className="footer-top">
//         <div className="footer-column">
//           <h4>CAN WE HELP YOU?</h4>
//           <p>SEND EMAIL</p>
//           <p>CUSTOMERCARE@SERVIS.COM</p>
//           <p>CALL US: +92 111-737-847</p>
//           <p>MONDAY TO SATURDAY 9:00AM TO 6:00PM</p>
//           <div className="social-icons">
//             <FaFacebookF />
//             <FaInstagram />
//             <FaYoutube />
//             <FaTiktok />
//             <FaSnapchat />
//           </div>
//         </div>

//         <div className="footer-column">
//           <h4>CATEGORIES</h4>
//           <p>NEW ARRIVALS</p>
//           <p>
//             <a href="/men">Men</a>
//           </p>
//           <p>
//             <a href="/Women">Women</a>
//           </p>
//           <p>
//             <a href="/Kids">Kids</a>
//           </p>
//         </div>

//         <div className="footer-column">
//           <h4>INFORMATION</h4>
//           <p>
//             <a href="aboutus"> ABOUT US</a>
//           </p>
//           <p>
//             <a href="contactus"> CONTACT US</a>
//           </p>
//           <p>
//             <a href="return-exchange">RETURNS & EXCHANGE</a>
//           </p>
//           <p>
//             <a href="Dilevery-info">DELIVERY & SHIPPING INFORMATION</a>
//           </p>
//           <p>PRIVACY POLICY</p>
//           <p>
//             <a href="franchise-program">FRANCHISE PROGRAM</a>
//           </p>
//         </div>

//         <div className="footer-column">
//           <h4>USEFUL LINKS</h4>
//           <p>
//             <a href="store-location">STORE LOCATION</a>
//           </p>
//           <p>
//             <a href="size-guide">SIZE GUIDE</a>
//           </p>
//           <p>
//             <a href="FAQS">FAQS</a>
//           </p>
//           <p>BLOGS</p>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p className="footer-info1">
//           © 2025, Servis Powered By Smart SEO · Refund policy · Privacy policy · Terms of service · Shipping policy · Contact information
//         </p>
//         <p className="shipping-info">
//           Shipping charges Rs.149 only will be applied. Nationwide COD available. Delivery time 5–7 working days.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React, { useState } from "react";
import "./Footer.scss";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaSnapchat } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert("Thank you for subscribing!");
      setEmail("");
    }
  };

  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <h2>JOIN OUR NEWSLETTER</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="submit-btn">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>

      {/* Footer Columns */}
      <div className="footer-top">
        <div className="footer-column">
          <h4>CAN WE HELP YOU?</h4>
          <p>SEND EMAIL</p>
          <p>CUSTOMERCARE@SERVIS.COM</p>
          <p>CALL US: +92 111-737-847</p>
          <p>MONDAY TO SATURDAY 9:00AM TO 6:00PM</p>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
            <FaTiktok />
            <FaSnapchat />
          </div>
        </div>

        <div className="footer-column">
          <h4>CATEGORIES</h4>
          <p>NEW ARRIVALS</p>
          <p><a href="/men">Men</a></p>
          <p><a href="/women">Women</a></p>
          <p><a href="/kids">Kids</a></p>
        </div>

        <div className="footer-column">
          <h4>INFORMATION</h4>
          <p><a href="/aboutus">ABOUT US</a></p>
          <p><a href="/contactus">CONTACT US</a></p>
          <p><a href="/return-exchange">RETURNS & EXCHANGE</a></p>
          <p><a href="/delivery-info">DELIVERY & SHIPPING INFORMATION</a></p>
          <p>PRIVACY POLICY</p>
          <p><a href="/franchise-program">FRANCHISE PROGRAM</a></p>
        </div>

        <div className="footer-column">
          <h4>USEFUL LINKS</h4>
          <p><a href="/store-location">STORE LOCATION</a></p>
          <p><a href="/size-guide">SIZE GUIDE</a></p>
          <p><a href="/faqs">FAQS</a></p>
          <p>BLOGS</p>
        </div>
      </div>

      {/* Footer Bottom + Marquee */}
      <div className="footer-bottom">
        <p className="footer-info1">
          © 2025, Servis Powered By Smart SEO · Refund policy · Privacy policy · Terms of service · Shipping policy · Contact information
        </p>

        {/* Running Marquee Shipping Info */}
        <div className="shipping-marquee">
          <div className="marquee-content">
            <span>
              Shipping charges Rs.149 only will be applied. Nationwide COD available. Delivery time 5–7 working days.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;