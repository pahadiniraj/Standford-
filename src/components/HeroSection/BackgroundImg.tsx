"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const BackgroundImg = () => {
  return (
    <motion.div
      initial={{ x: "100%" }} // Start off-screen
      animate={{ x: 0 }} // Move to original position
      transition={{ duration: 1, ease: "easeOut" }} // Smooth animation
      className="absolute top-[90px] -right-3 w-[190px] h-[200px] z-10 md:hidden"
    >
      <Image
        src="/assets/hero-section/globe.png"
        alt="Hero Section Image"
        width={200}
        height={200}
        className="rounded-lg object-contain mix-blend-color-burn"
        priority

      />
    </motion.div>
  );
};

export default BackgroundImg;
