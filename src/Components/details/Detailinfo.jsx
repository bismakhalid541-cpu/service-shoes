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

//   const [selectedSize, setSelectedSize] = useState("38");
//   const [quantity, setQuantity] = useState(1);
//   const [zoomedIndex, setZoomedIndex] = useState(null);

//   // Yeh trigger sab kuch update karega
//   const [cartTrigger, setCartTrigger] = useState(0);

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

//   const handleAddToBag = () => {
//     const cartItem = {
//       id: product.id,
//       title: product.title,
//       price: product.price,
//       originalPrice: product.originalPrice || null,
//       images: product.images,
//       size: selectedSize,
//       color: product.color || "GREY",
//       qty: quantity,
//     };

//     let cart = [];
//     const saved = localStorage.getItem("MY_CART_2025");
//     if (saved) {
//       try {
//         cart = JSON.parse(saved);
//       } catch (e) {
//         cart = [];
//       }
//     }

//     const exists = cart.findIndex(
//       item => item.id === cartItem.id && item.size === cartItem.size && item.color === cartItem.color
//     );

//     if (exists !== -1) {
//       cart[exists].qty += quantity;
//     } else {
//       cart.push(cartItem);
//     }

//     // Save in localStorage
//     localStorage.setItem("MY_CART_2025", JSON.stringify(cart));

//     // Trigger badhao → Navbar mein count + total + drawer update hoga
//     setCartTrigger(prev => prev + 1);
//   };

//   return (
//     <div className="detail-page">
//       <Navbar cartTrigger={cartTrigger} />

//       <div className="detail-container">
//         <div className="all-images-wrapper">
//           {product.images.map((img, idx) => (
//             <div
//               key={idx}
//               className={`image-box ${zoomedIndex === idx ? "zoomed" : ""}`}
//               onClick={() => setZoomedIndex(zoomedIndex === idx ? null : idx)}
//             >
//               <img src={img} alt={`${product.title} ${idx + 1}`} />
//             </div>
//           ))}
//         </div>

//         <div className="info-section">
//           <h1>{product.title}</h1>
//           <div className="price-section">
//             <span className="current-price">Rs. {product.price.toLocaleString()}</span>
//             {product.originalPrice && (
//               <span className="original-price">Rs. {product.originalPrice.toLocaleString()}</span>
//             )}
//           </div>

//           <div className="color-section">
//             <h3>COLOR</h3>
//             <button className="color-btn selected">{product.color || "GREY"}</button>
//           </div>

//           <div className="size-section">
//             <h3>SIZE</h3>
//             <div className="size-grid">
//               {["36", "37", "38", "39", "40", "41"].map((size) => (
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

//          <a href="/Infosection">

//            <button className="add-to-bag-btn" onClick={handleAddToBag}>
//             ADD TO BAG
//           </button>
//          </a>
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

  const [selectedSize, setSelectedSize] = useState("38");
  const [quantity, setQuantity] = useState(1);
  const [zoomedIndex, setZoomedIndex] = useState(null);

  // Yeh trigger Navbar ko batayega ki cart update hua aur drawer khol do
  const [cartTrigger, setCartTrigger] = useState(0);

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

  const handleAddToBag = (e) => {
    e.preventDefault(); // Important: Link ka default behavior rok do

    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      originalPrice: product.originalPrice || null,
      images: product.images,
      size: selectedSize,
      color: product.color || "GREY",
      qty: quantity,
    };

    // LocalStorage se cart load karo
    let cart = [];
    const saved = localStorage.getItem("MY_CART_2025");
    if (saved) {
      try {
        cart = JSON.parse(saved);
      } catch (e) {
        cart = [];
      }
    }

    // Same product + size + color wala item dhundo
    const existsIndex = cart.findIndex(
      item => item.id === cartItem.id && item.size === cartItem.size && item.color === cartItem.color
    );

    if (existsIndex !== -1) {
      cart[existsIndex].qty += quantity;
    } else {
      cart.push(cartItem);
    }

    // Save karo
    localStorage.setItem("MY_CART_2025", JSON.stringify(cart));

    // Trigger badhao → Navbar drawer khud open ho jayega + count update
    setCartTrigger(prev => prev + 1);

    // Optional: Success feedback (toast ya animation)
    // alert("Added to cart!");
  };

  return (
    <div className="detail-page">
      <Navbar cartTrigger={cartTrigger} />

      <div className="detail-container">
        <div className="all-images-wrapper">
          {product.images.map((img, idx) => (
            <div
              key={idx}
              className={`image-box ${zoomedIndex === idx ? "zoomed" : ""}`}
              onClick={() => setZoomedIndex(zoomedIndex === idx ? null : idx)}
            >
              <img src={img} alt={`${product.title} ${idx + 1}`} />
            </div>
          ))}
        </div>

        <div className="info-section">
          <h1>{product.title}</h1>
          <div className="price-section">
            <span className="current-price">Rs. {product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="original-price">Rs. {product.originalPrice.toLocaleString()}</span>
            )}
          </div>

          <div className="color-section">
            <h3>COLOR</h3>
            <button className="color-btn selected">{product.color || "GREY"}</button>
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

          {/* Yeh line hata di — ab koi redirect nahi hoga */}
          <button className="add-to-bag-btn" onClick={handleAddToBag}>
            ADD TO BAG
          </button>
        </div>
      </div>

    
    </div>
  );
};

export default Detailinfo;