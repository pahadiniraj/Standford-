import React from "react";
import CareerOpportunitiesSection from "./CareerOppurtunitiesSection";
import HeroPhotoSection from "./HeroPhotoAnimation";

const HeroSection = () => {
  return (
    <div className="lg:container lg:mx-auto lg:px-20 px-4   my-10  md:flex justify-between gap-4">
      <CareerOpportunitiesSection />
      <HeroPhotoSection />
    </div>
  );
};

export default HeroSection;
