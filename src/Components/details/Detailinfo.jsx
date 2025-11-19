// import React, { useState } from "react";
// import { useParams, useLocation, useNavigate } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";
// import "./Detailinfo.scss";

// const Detailinfo = () => {
//   const { productId } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const product = location.state?.product;

//   const [selectedImage, setSelectedImage] = useState(0);
//   const [selectedSize, setSelectedSize] = useState("36");
//   const [quantity, setQuantity] = useState(1);

//   if (!product) {
//     return (
//       <div>
//         <Navbar />
//         <div style={{ padding: "100px 20px", textAlign: "center" }}>
//           <h2>Product not found</h2>
//           <button onClick={() => navigate(-1)}>Go Back</button>
//         </div>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <div className="detail-page">
//       <Navbar />

//       <div className="detail-container">
//         {/* LEFT - ALL IMAGES IN ONE VERTICAL DIV (NO THUMBNAILS) */}
//         <div className="image-gallery-vertical">
//           {/* Saari images ek hi div mein vertically */}
//           <div className="all-images-wrapper">
//             {product.images.map((img: string, idx: number) => (
//               <div
//                 key={idx}
//                 className={`image-item ${selectedImage === idx ? "active" : ""}`}
//                 onClick={() => setSelectedImage(idx)}
//               >
//                 <img src={img} alt={`${product.title} ${idx + 1}`} />
//               </div>
//             ))}
//           </div>

//           {/* Main Big Image */}
//           <div className="main-image">
//             <img src={product.images[selectedImage]} alt={product.title} />
//           </div>
//         </div>

//         {/* RIGHT - PRODUCT INFO */}
//         <div className="info-section">
//           <h1>{product.title}</h1>

//           <div className="price-section">
//             <span className="current-price">{product.price}</span>
//             {product.originalPrice && (
//               <span className="original-price">{product.originalPrice}</span>
//             )}
//           </div>

//           <div className="color-section">
//             <h3>COLOR</h3>
//             <button className="color-btn selected">
//               {product.color || "GREY"}
//             </button>
//           </div>

//           <div className="size-chart-link">
//             <a href="/size-guide">SIZE CHART</a>
//           </div>

//           <div className="size-section">
//             <h3>SIZE</h3>
//             <div className="size-grid">
//               {["36", "37", "38", "39", "40", "41", "42", "43", "44"].map((size) => (
//                 <button
//                   key={size}
//                   className={`size-btn ${selectedSize === size ? "selected" : ""}`}
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="quantity-section">
//             <h3>Quantity</h3>
//             <div className="quantity-controls">
//               <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
//               <span>{quantity}</span>
//               <button onClick={() => setQuantity(quantity + 1)}>+</button>
//             </div>
//           </div>

//           <button className="add-to-bag-btn">ADD TO BAG</button>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Detailinfo;

import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Detailinfo.scss";

const Detailinfo = () => {
  const { productId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("36");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div>
        <Navbar />
        <div style={{ padding: "100px 20px", textAlign: "center" }}>
          <h2>Product not found</h2>
          <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="detail-page">
      <Navbar />

      <div className="detail-container">
        {/* LEFT - ALL IMAGES IN ONE VERTICAL DIV */}
        <div className="image-gallery-vertical">
          <div className="all-images-wrapper">
            {product.images.map((img: string, idx: number) => (
              <div
                key={idx}
                className={`image-item ${selectedImage === idx ? "active" : ""}`}
                onClick={() => setSelectedImage(idx)}
              >
                <img src={img} alt={`${product.title} ${idx + 1}`} />
              </div>
            ))}
          </div>

          {/* Main Big Image */}
          <div className="main-image">
            <img src={product.images[selectedImage]} alt={product.title} />
          </div>
        </div>

        {/* RIGHT - PRODUCT INFO */}
        <div className="info-section">
          <h1>{product.title}</h1>

          <div className="price-section">
            <span className="current-price">{product.price}</span>
            {product.originalPrice && (
              <span className="original-price">{product.originalPrice}</span>
            )}
          </div>

          <div className="color-section">
            <h3>COLOR</h3>
            <button className="color-btn selected">
              {product.color || "GREY"}
            </button>
          </div>

          <div className="size-chart-link">
            <a href="/size-guide">SIZE CHART</a>
          </div>

          <div className="size-section">
            <h3>SIZE</h3>
            <div className="size-grid">
              {["36", "37", "38", "39", "40", "41"].map((size) => (
                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? "selected" : ""}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="quantity-section">
            <h3>Quantity</h3>
            <div className="quantity-controls">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <button className="add-to-bag-btn">ADD TO BAG</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Detailinfo;