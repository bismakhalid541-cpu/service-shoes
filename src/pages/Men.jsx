import React from "react";
import { FaFilter, FaSortAmountDown } from "react-icons/fa";
import Navbar from "../Components/Navbar/Navbar";
import Footer from '../Components/Footer/Footer';
import "../Components/topline/Topline.scss";
import Productgallery from "../Components/productgallery/Productgallery";
import Topline from "../Components/topline/Topline";
const Men = () => {
  const menImages = [
    "/men1.jpg",
    "/men2.jpg",
    "/men3.jpg",
    "/men4.jpg",
    "/men5.jpg",
     "/men2.jpg",
    "/men3.jpg",
    "/men4.jpg",
  ];
  return (
    <div>
      <Navbar forceWhite={true} />

      
         <Topline/>
         <Productgallery images={menImages}/>  
         <Footer/>
      </div>
    
  );
};

export default Men;
