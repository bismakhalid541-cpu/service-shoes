// AboutUs.jsx
import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Aboutus from'../Components/about/About';
const AboutUs = () => {
  return (
    <div className="about-container">
        <Navbar/>
        <Aboutus/>
        <Footer/>
    </div>
  );
};

export default AboutUs;
