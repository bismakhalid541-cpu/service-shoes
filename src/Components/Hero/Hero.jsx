// HeroSection.tsx
import React from "react";
import "./Hero.scss";

const banners = [
  { type: "video", src: "/Banner1.mp4" },
  { type: "video", src: "/Banner2.mp4" },
  { type: "image", src: "/Banner3.png" },
  { type: "image", src: "/Banner4.jpg" },
];

const HeroSection = () => {
  return (
    <div className="hero-wrapper">
      {banners.map((banner, index) => (
        <section className="hero-section" key={index}>
          {banner.type === "video" ? (
            <video className="bg-media" muted loop playsInline autoPlay>
              <source src={banner.src} type="video/mp4" />
            </video>
          ) : (
            <img src={banner.src} alt={`Banner${index + 1}`} className="bg-media" />
          )}
        </section>
      ))}
    </div>
  );
};

export default HeroSection;
