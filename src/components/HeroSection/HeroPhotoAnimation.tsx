"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "../../../public/assets/hero-section/hero-img-1.jpg";
import img2 from "../../../public/assets/hero-section/hero-img-2.jpg";
import HeroSectionAnimatedBanner from "./HeroSectionAnimatedBanner";

const HeroPhotoSection = () => {
  return (
    <div className="w-1/2 flex gap-4 relative">
      <HeroSectionAnimatedBanner />
      {/* Image 1 */}
      <motion.div
        className="h-[320px] w-[260px] mt-[80px] bg-slate-400 rounded-xl overflow-hidden relative"
        initial={{ opacity: 0 }} // Start with opacity 0
        animate={{ opacity: 1 }} // Fade in to opacity 1
        transition={{ duration: 1, ease: "easeInOut" }} // Adjust duration as needed
      >
        <Image
          src={img1}
          alt="Hero Image 1"
          priority
          className="object-cover object-center h-full w-full"
        />
      </motion.div>

      {/* Image 2 */}
      <motion.div
        className="h-[320px] w-[260px] bg-slate-400 rounded-xl overflow-hidden relative"
        initial={{ opacity: 0 }} // Start with opacity 0
        animate={{ opacity: 1 }} // Fade in to opacity 1
        transition={{ duration: 1, ease: "easeInOut" }} // Adjust duration as needed
      >
        <Image
          src={img2}
          alt="Hero Image 2"
          priority
          className="object-cover object-center h-full w-full"
        />
      </motion.div>
    </div>
  );
};

export default HeroPhotoSection;
