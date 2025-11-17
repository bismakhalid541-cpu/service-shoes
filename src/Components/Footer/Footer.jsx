// import React from "react";
// import "./Footer.scss";
// import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaSnapchat } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="footer">
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
//           <p><a href="/men">Men</a></p>
//           <p><a href="/Women">Women</a></p>
//           <p><a href="/Kids">Kids</a></p>
//         </div>

//         <div className="footer-column">
//           <h4>INFORMATION</h4>
//           <p>
//            <a href="aboutus"> ABOUT US</a>
//           </p>
//           <p>
//             <a href="contactus"> CONTACT US</a>
//           </p>
//           <p>
//            <a href="return-exchange">RETURNS & EXCHANGE</a> 
//             </p>
//           <p>
//             <a href="Dilevery-info">DELIVERY & SHIPPING INFORMATION</a>
//             </p>
//           <p>PRIVACY POLICY</p>
//           <p>
//             <a href="franchise-program">FRANCHISE PROGRAM</a>
//             </p>
//         </div>

//         <div className="footer-column">
//           <h4>USEFUL LINKS</h4>
//           <p>STORE LOCATION</p>
//           <p>
//            <a href="size-guide">SIZE GUIDE</a> 
//             </p>
            
//           <p><a href="FAQS">FAQS</a></p>
//           <p>BLOGS</p>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p>
//           © 2025, Servis Powered By Smart SEO &nbsp; · &nbsp; Refund policy &nbsp; · &nbsp; 
//           Privacy policy &nbsp; · &nbsp; Terms of service &nbsp; · &nbsp; 
//           Shipping policy &nbsp; · &nbsp; Contact information
//         </p>
//         <p className="shipping-info">
//           Shipping charges Rs.149 only will be applied. Nationwide COD available. Nationwide delivery time is within 5 to 7 working days
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import "./Footer.scss";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaSnapchat, FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      {/* 🔥 Newsletter Section */}
      <div className="newsletter-box">
        <h2>Join Our Newsletter</h2>
        <div className="newsletter-input">
          <input type="email" placeholder="Enter your email" />
          <button className="arrow-btn"><FaArrowRight/></button>
        </div>
      </div>

      {/* Original Footer */}
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
          <p><a href="/Women">Women</a></p>
          <p><a href="/Kids">Kids</a></p>
        </div>

        <div className="footer-column">
          <h4>INFORMATION</h4>
          <p><a href="aboutus"> ABOUT US</a></p>
          <p><a href="contactus"> CONTACT US</a></p>
          <p><a href="return-exchange">RETURNS & EXCHANGE</a></p>
          <p><a href="Dilevery-info">DELIVERY & SHIPPING INFORMATION</a></p>
          <p>PRIVACY POLICY</p>
          <p><a href="franchise-program">FRANCHISE PROGRAM</a></p>
        </div>

        <div className="footer-column">
          <h4>USEFUL LINKS</h4>
          <p>
            <a href="store-location">STORE LOCATION</a></p>
          <p><a href="size-guide">SIZE GUIDE</a></p>
          <p><a href="FAQS">FAQS</a></p>
          <p>BLOGS</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2025, Servis Powered By Smart SEO · Refund policy · Privacy policy · Terms of service · Shipping policy · Contact information
        </p>
        <p className="shipping-info">
          Shipping charges Rs.149 only will be applied. Nationwide COD available. Delivery time 5–7 working days.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
