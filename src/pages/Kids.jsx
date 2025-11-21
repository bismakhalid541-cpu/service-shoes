import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Productgallery from "../Components/productgallery/Productgallery";
import Footer from "../Components/Footer/Footer";
import Topline from "../Components/topline/Topline";

const Kids = () => {
  // Har product ka apna data with unique images
  const womenProducts = [
    {
      id: "BCH010018203325",
      images: [
        "/kid1.jpg",
        "/kid2.jpg",
        "/kid3.jpg",
        "/kid4.jpg",
        "/kid5.jpg",
        "/kid.jpg",
        "/kid2.jpg",
        "/kid5.jpg",
      ],
      title: "Kids Sneeker",
      price: " 3,499",
      discount: "-25%",
      name: "kids sport shoes",
      regularprice: "1,799.00",
      isNew: true,
    },
    {
      id: "BCH010018203325",
      images: [
        "/women-shoes2.jpg",
        "/women-sheoes3.jpg",
        "/women-shoes1.jpg",
        "/women-shoes5.jpg",
      ],
      title: "Kids Sneeker",
      price: " 4,999",
      discount: "-30%",
      name: "kids sport shoes",
      regularprice: "1,799.00",
      isNew: true,
    },
    {
      id: "BCH010018203325",
      images: [
        "/women-sheoes3.jpg",
        "/women-shoes4.jpg",
        "/women-shoes2.jpg",
        "/women-shoes1.jpg",
        "/kid2.jpg",
        "/kid5.jpg",
      ],
      title: "Kids Sneeker",
      price: " 2,999",
      discount: "-20%",
      regularprice: "1,799.00",
      name: "kids sport shoes",
      isNew: false,
    },
    {
      id: "BCH010018203325",
      images: [
        "/women-shoes4.jpg",

        "/women-sheoes3.jpg",
        "/women-shoes2.jpg",
        "/kid2.jpg",
        "/kid5.jpg",
      ],
      title: "Kids Sneeker",
      price: " 3,799",
      name: "kids sport shoes",
      regularprice: "1,799.00",
      discount: "-15%",
      isNew: true,
    },
    // Add more products as needed
  ];

  return (
    <div>
      <Navbar />
      <Topline />
      <Productgallery products={womenProducts} />
      <Footer />
    </div>
  );
};

export default Kids;
