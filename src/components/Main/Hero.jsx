"use client";
import React from "react";
import Slider from "react-slick";

const HeroSection = () => {
  // Slider settings
  const settings = {
    dots: false, // Set to true if you want pagination dots
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true, // Adds a fade transition effect
  };

  const images = [
    "/image1.jpg", // Example image URLs
    "/image2.jpg",
    "/image3.jpg",
  ];

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Image Slider */}
      <Slider {...settings} className="h-full">
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-screen object-cover"
            />
          </div>
        ))}
      </Slider>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">
          Experience Spotless Cleaning
        </h1>
        <p className="text-lg text-wrap max-w-[900px] w-full">
          Sauber Pro Max is a cleaning company that cares about the smallest
          details. We are not the only ones, but we are the best. We clean
          hotels, homes, offices, buildings, apartments, warehouses, basements,
          and many other services. We look forward to providing you with the
          best service.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
