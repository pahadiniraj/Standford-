import React from "react";
import CareerOpportunitiesSection from "./CareerOppurtunitiesSection";
import HeroPhotoSection from "./HeroPhotoAnimation";
import BackgroundImg from "./BackgroundImg";

const HeroSection = () => {
  return (
    <div className="lg:container lg:mx-auto lg:px-20   md:my-10  md:flex justify-between gap-4 relative">
      <CareerOpportunitiesSection />
      <HeroPhotoSection />
      <BackgroundImg />
    </div>
  );
};

export default HeroSection;
