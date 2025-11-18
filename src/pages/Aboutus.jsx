// AboutUs.jsx
import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Aboutus from'../Components/about/About';
const AboutUs = () => {
  return (
    <div className="about-container">
        <Navbar backgroundColor={'white'}/>
        <Aboutus/>
        <Footer/>
    </div>
  );
};

export default AboutUs;
