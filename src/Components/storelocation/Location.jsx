import React, { useState } from "react";
import "./Location.scss";

const Location = () => {
  const cities = [
    { name: "Karachi", lat: 24.8607, lng: 67.0011 },
    { name: "Lahore", lat: 31.5497, lng: 74.3436 },
    { name: "Islamabad", lat: 33.6844, lng: 73.0479 },
    { name: "Rawalpindi", lat: 33.5651, lng: 73.0169 },
    { name: "Peshawar", lat: 34.0151, lng: 71.5249 },
    { name: "Quetta", lat: 30.1798, lng: 66.975 },
    { name: "Faisalabad", lat: 31.418, lng: 73.079 },
    { name: "Multan", lat: 30.1575, lng: 71.5249 },
    { name: "Hyderabad", lat: 25.396, lng: 68.3578 },
    { name: "Sialkot", lat: 32.4945, lng: 74.5229 },
    { name: "Gujranwala", lat: 32.1877, lng: 74.1945 },
    { name: "Sukkur", lat: 27.7139, lng: 68.8354 },
    { name: "Bahawalpur", lat: 29.3956, lng: 71.6833 },
  ];

  const [selectedCity, setSelectedCity] = useState(cities[0]);

  return (
    <div className="location">
      {/* LEFT SIDE — CITY LIST */}
      <div className="left">
        <h2>Select City</h2>
        {cities.map((city) => (
          <p
            key={city.name}
            className={selectedCity.name === city.name ? "active" : ""}
            onClick={() => setSelectedCity(city)}
          >
            {city.name}
          </p>
        ))}
      </div>

      {/* RIGHT SIDE — DYNAMIC MAP */}
      <div className="right">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps?q=${selectedCity.lat},${selectedCity.lng}&hl=es;z=14&output=embed`}
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
