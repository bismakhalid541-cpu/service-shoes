import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Productgallery from "../Components/productgallery/Productgallery";
import Footer from "../Components/Footer/Footer";
import Topline from "../Components/topline/Topline";

const Women = () => {
  // Har product ka apna data with unique images
  const womenProducts = [
    {
      id: "BCH010018203325",
      images: [
        "/women-shoes1.jpg",
        "/women-shoes2.jpg",
        "/women-sheoes3.jpg",
        "/women-shoes4.jpg",
        "/women-shoes5.jpg",
      ],
      title: "Women Sneekers",
      price: "3,499",
      discount: "-25%",
      regularprice: "1,799.00",
      name: "women shoes",
      isNew: true,
    },
    {
      id: "BCH010018203325",
      images: [
        "/women-shoes2.jpg",
        "/women-sheoes3.jpg",
        "/women-shoes1.jpg",
        "/women-shoes4.jpg",
      ],
      title: "Women Sneekers",
      price: "4,999",
      name: "women shoes",
      discount: "-30%",
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
      ],
      title: "Women Sneekers",
      price: "2,999",
      name: "women shoes",
      discount: "-20%",
      regularprice: "1,799.00",
      isNew: false,
    },
    {
      id: "BCH010018203325",
      images: [
        "/women-shoes4.jpg",
        "/women-shoes4.jpg",
        "/women-shoes3.jpg",
        "/women-shoes2.jpg",
      ],
      title: "TRENDING NOW",
      price: "3,799",
      name: "women shoes",
      discount: "-15%",
      regularprice: "1,799.00",
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

export default Women;
