import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { FaFilter, FaSortAmountDown } from "react-icons/fa";
import "../Components/topline/Topline.scss";
import Productgallery from "../Components/productgallery/Productgallery";
import Footer from '../Components/Footer/Footer';
import Topline from '../Components/topline/Topline';
const Kids = () => {
  const kidsImages = [
    "/kid1.jpg",
    "/kid2.jpg",
    "/kid3.jpg",
    "/kid4.jpg",
    "/kid5.jpg",
    "/kid.jpg",
    "/kid2.jpg",
    "/kid5.jpg"
  ];
  return (
    <div>
        <Navbar />
      <Topline/>

        <Productgallery images={kidsImages}/>
        <Footer/>
      </div>

  )
}

export default Kids