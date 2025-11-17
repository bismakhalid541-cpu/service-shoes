import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { FaFilter, FaSortAmountDown } from "react-icons/fa";
import "../Components/topline/Topline.scss";
import Productgallery from "../Components/productgallery/Productgallery";
import Footer from '../Components/Footer/Footer';
import Topline from "../Components/topline/Topline";
const Women = () => {
  
const womenImages = [
    "/women-shoes1.jpg",
    "/women-shoes2.jpg",
    "/women-shoes3.jpg",
    "/women-shoes4.jpg",
    "/women-shoes5.jpg",
     "/women-shoes2.jpg",
    "/women-shoes3.jpg",
    "/women-shoes4.jpg",
  ];
  return (
    <div>
      <Navbar />
        
         <Topline/>
        <Productgallery images={womenImages}/>
        <Footer/>
      </div>
    
  );
};

export default Women;
