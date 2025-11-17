import React from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer.jsx";
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
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/return-exchange" element={<Exchangepollicy />} />
        <Route path="/Dilevery-info" element={<Dileveryinfo />} />
        <Route path="/franchise-program" element={<Franchiseprogram />} />
        <Route path="/size-guide" element={<Sizeguide />} />
        <Route path="/FAQS" element={<FAQS />} />
        <Route path="/store-location" element={<Storelocation />} />
        <Route path="/detail-page/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
