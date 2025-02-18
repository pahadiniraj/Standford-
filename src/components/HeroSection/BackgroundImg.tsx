"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/assets/hero-section/hero-img-1.jpg",
  "/assets/hero-section/hero-img-2.jpg",
];

const BackgroundImg = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false, // Disable fade effect for sliding
    arrows: false,
    ltr: true,
    centerPadding: "40px", // Adds spacing between slides
  };

  return (
    <div className="  w-full h-full overflow-hidden rounded-lg ">
      <Slider {...settings} className="w-full h-full gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-[400px]  px-4 ">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover h-[500px]"
              priority
              quality={90}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BackgroundImg;
