import "./index.css";
import React from "react";
import { useState, useEffect } from "react";
const HomePage = () => {
  const carouselImages = [
    "https://21cenrad.com/wp-content/uploads/2018/02/21cri-hero.jpg",
    "https://21cenrad.com/wp-content/uploads/2018/02/21cri-hero.jpg",
    "https://21cenrad.com/wp-content/uploads/2018/02/21cri-hero.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex, carouselImages.length]);

  return (
    <>
      <div className="section2">
        {carouselImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`carousel-slide-${index}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              opacity: index === currentIndex ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          />
        ))}
        <div className="carousel-buttons">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`carousel-button ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => handleButtonClick(index)}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="section3">
          <h2>Our Services</h2>
        </div>
      </div>
    </>
  );
};

export default HomePage;
