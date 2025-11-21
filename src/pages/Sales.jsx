import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Productgallery from "../Components/productgallery/Productgallery";
import Footer from '../Components/Footer/Footer';
import Topline from "../Components/topline/Topline";

const Sales = () => {
  // Har product ka apna data with unique images
  const womenProducts = [
    {
      id: "BCH010018203325",
      images: [
        "/women-shoes1.jpg",
        "/women-shoes2.jpg",
        "/women-shoes3.jpg",
        "/women-shoes4.jpg",
        "/women-shoes5.jpg",
      ],
      title: "ONLINE EXCLUSIVE DISCOUNT",
      price: "3,499",
       name:"women shoes",
       regularprice: "1,799.00",
      discount: "-25%",
      isNew: true
    },
    {
      id: "BCH010018203325",
      images: [
        "/women-shoes2.jpg",
        "/women-shoes3.jpg",
        "/women-shoes1.jpg",
        "/women-shoes5.jpg",
      ],
      title: "PREMIUM COLLECTION",
      price: "4,999",
      discount: "-30%",
      regularprice: "1,799.00",
       name:"kids shoes",
      isNew: true
    },
    {
      id: "BCH010018203325",
      images: [
        "/women-sheoes3.jpg",
        "/women-shoes4.jpg",
        "/women-shoes2.jpg",
        "/women-shoes1.jpg",
      ],
      title: "SUMMER SPECIAL",
      price: "2,999",
       name:"women shoes",
       regularprice: "1,799.00",
      discount: "-20%",
      isNew: false
    },
    {
      id: "BCH010018203325",
      images: [
        "/women-shoes4.jpg",
        "/women-shoes5.jpg",
        "/women-shoes3.jpg",
        "/women-shoes2.jpg",
      ],
      title: "TRENDING NOW",
      price: "3,799",
      regularprice: "1,799.00",
      discount: "-15%",
       name:"men shoes",
      isNew: true
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

export default Sales;