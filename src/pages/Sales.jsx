import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { FaFilter, FaSortAmountDown } from "react-icons/fa";
import "../Components/topline/Topline.scss";
import Productgallery from "../Components/productgallery/Productgallery";
import Footer from "../Components/Footer/Footer";
import Topline from "../Components/topline/Topline";
const Sales = () => {
  const saleImages = [
    "/women-shoes1.jpg",
    "/kid1.jpg",
    "/kid2.jpg",
    "/kid3.jpg",
    "/women-shoes4.jpg",
    "/women-shoes5.jpg",
    "/men1.jpg",
    "/men2.jpg",
    "/men3.jpg",
    "/men4.jpg",
    "/men5.jpg",
    "/kid4.jpg",
    "/kid5.jpg",
  ];
  return (
    <div>
      <Navbar />

      <Topline />
      <Productgallery images={saleImages} />
      <Footer />
    </div>
  );
};

export default Sales;
