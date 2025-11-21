import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids.jsx";
import Sales from "./pages/Sales";
import Home from "./pages/Home.jsx";
import Contactus from "./pages/Contactus.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import Exchangepollicy from "./pages/Exchangepollicy.jsx";
import Dileveryinfo from "./pages/Dileveryinfo.jsx";
import Franchiseprogram from "./pages/Franchiseprogram.jsx";
import Sizeguide from "./pages/Sizeguide.jsx";
import FAQS from "./pages/FAQS.jsx";
import Storelocation from "./pages/Storelocation.jsx";
import Details from "./pages/Details.jsx";
import Infosection from "./pages/Infosection.jsx";

import Protectedroute from "./Components/authentication/Protectedroute.jsx";
import Loginsignup from "./pages/Loginsignup.jsx";  // Yeh login + signup dono dikha raha hoga

function App() {
  return (
    <div className="App">
      <Routes>

        {/* ==================== PUBLIC ROUTES (Login/Signup) ==================== */}
        <Route path="/" element={<Loginsignup />} />   {/* Sirf yeh hona chahiye */}

        {/* ==================== PROTECTED ROUTES (User logged in ho tabhi dikhe) ==================== */}
        <Route element={<Protectedroute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/return-exchange" element={<Exchangepollicy />} />
          <Route path="/delivery-info" element={<Dileveryinfo />} />
          <Route path="/franchise-program" element={<Franchiseprogram />} />
          <Route path="/size-guide" element={<Sizeguide />} />
          <Route path="/faqs" element={<FAQS />} />
          <Route path="/store-location" element={<Storelocation />} />
          <Route path="/detail-page/:id" element={<Details />} />
          <Route path="/info-section" element={<Infosection />} />
        </Route>

        {/* ==================== 404 - Optional ==================== */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />

      </Routes>
    </div>
  );
}

export default App;