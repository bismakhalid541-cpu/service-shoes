// import React from "react";
// import Navbar from "../Components/Navbar/Navbar";
// import { FaFilter, FaSortAmountDown } from "react-icons/fa";
// import "../Components/topline/Topline.scss";
// import Productgallery from "../Components/productgallery/Productgallery";
// import Footer from "../Components/Footer/Footer";
// import Topline from "../Components/topline/Topline";
// const Sales = () => {
//   const saleImages = [
//     "/women-shoes1.jpg",
//     "/kid1.jpg",
//     "/kid2.jpg",
//     "/kid3.jpg",
//     "/women-shoes4.jpg",
//     "/women-shoes5.jpg",
//     "/men1.jpg",
//     "/men2.jpg",
//     "/men3.jpg",
//     "/men4.jpg",
//     "/men5.jpg",
//     "/kid4.jpg",
//     "/kid5.jpg",
//   ];
//   return (
//     <div>
//       <Navbar />

//       <Topline />
//       <Productgallery images={saleImages} />
//       <Footer />
//     </div>
//   );
// };

// export default Sales;

import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Productgallery from "../Components/productgallery/Productgallery";
import Footer from '../Components/Footer/Footer';
import Topline from "../Components/topline/Topline";

const Sales = () => {
  // Har product ka apna data with unique images
  const womenProducts = [
    {
      id: 1,
      images: [
        "/women-shoes1.jpg",
        "/women-shoes2.jpg",
        "/women-shoes3.jpg",
        "/women-shoes4.jpg",
        "/women-shoes5.jpg",
      ],
      title: "ONLINE EXCLUSIVE DISCOUNT",
      price: "Rs. 3,499",
      discount: "-25%",
      isNew: true
    },
    {
      id: 2,
      images: [
        "/women-shoes2.jpg",
        "/women-shoes3.jpg",
        "/women-shoes1.jpg",
        "/women-shoes5.jpg",
      ],
      title: "PREMIUM COLLECTION",
      price: "Rs. 4,999",
      discount: "-30%",
      isNew: true
    },
    {
      id: 3,
      images: [
        "/women-shoes3.jpg",
        "/women-shoes4.jpg",
        "/women-shoes2.jpg",
        "/women-shoes1.jpg",
      ],
      title: "SUMMER SPECIAL",
      price: "Rs. 2,999",
      discount: "-20%",
      isNew: false
    },
    {
      id: 4,
      images: [
        "/women-shoes4.jpg",
        "/women-shoes5.jpg",
        "/women-shoes3.jpg",
        "/women-shoes2.jpg",
      ],
      title: "TRENDING NOW",
      price: "Rs. 3,799",
      discount: "-15%",
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