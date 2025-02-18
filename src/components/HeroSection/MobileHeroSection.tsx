"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const MobileHeroSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  type BannerItem = {
    src: string;
    subHeading: string;
    heading: string;
    paragraph: string;
    btn: string;
  };

  const banner: BannerItem[] = [
    {
      src: "/assets/hero-section/hero-img-1.jpg",
      subHeading: "WELCOME TO SHOPERY",
      heading: "FRESH AND HEALTHY ORGANIC FOOD",
      paragraph: "Free shipping in all your order, we deliver, you enjoy",
      btn: "Shop Now",
    },
    {
      src: "/assets/hero-section/hero-img-2.jpg",
      subHeading: "WELCOME TO SHOPERY",
      heading: "FRESH AND HEALTHY ORGANIC FOOD",
      paragraph: "Free shipping in all your order, we deliver, you enjoy",
      btn: "Shop Now",
    },
  ];

  return (
    <div className="md:hidden w-full overflow-hidden ">
      <Slider {...settings}>
        {banner.map((val, idx) => (
          <div className="py-2 mb-2 w-full" key={idx}>
            <div className="flex justify-center w-full items-center gap-4 md:gap-10">
              <div className="w-3/6">
                <Image
                  src={val.src}
                  alt="hero image"
                  width={500}
                  height={300}
                  unoptimized
                />
              </div>
              <div className="w-3/6 flex flex-col justify-center leading-tight gap-2">
                <p className="pl-1 xs:text-xxxs md:text-xs text-xxxs text-[#00B207] w-full">
                  {val.subHeading}
                </p>
                <h2 className="xs:text-base md:text-3xl xl:text-4xl text-base pl-1 font-semibold w-full">
                  {val.heading}
                </h2>
                <p className="pl-1 text-xxxs xs:text-xxxs md:text-xs mb-1 w-full">
                  {val.paragraph}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MobileHeroSection;
