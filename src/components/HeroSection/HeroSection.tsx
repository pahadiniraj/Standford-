import React from "react";
import CareerOpportunitiesSection from "./CareerOppurtunitiesSection";
import HeroPhotoSection from "./HeroPhotoSection";

const HeroSection = () => {
  return (
    <div className="container mx-auto lg:px-20 px-4 pb-8 pt-6 mb-4 hidden md:flex justify-between gap-4">
      <CareerOpportunitiesSection />
      <HeroPhotoSection />
    </div>
  );
};

export default HeroSection;
