"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";
import { HeroBanner } from "@/contents/HeroSection/HeroSectionBanner";

const HeroSectionAnimatedBanner = () => {
  return (
    <motion.div
      className="absolute h-[140px] w-[260px] bg-yellow-400 right-20 top-[220px] rounded-lg p-2 overflow-hidden text-black z-10"
      initial={{ opacity: 0 }} // Initially invisible
      animate={{ opacity: 1 }} // Fade in to visible
      transition={{ duration: 1, ease: "easeInOut" }} // Adjust duration and easing
    >
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 1, // Delay between each child animation
              delayChildren: 0.2, // Initial delay before animation starts
            },
          },
        }}
        className="flex flex-col items-start gap-2 h-full"
      >
        {HeroBanner.map((value, index) => (
          <motion.li
            key={index}
            variants={{
              hidden: { x: -100, opacity: 0 }, // Start from the left and invisible
              visible: { x: 0, opacity: 1 }, // Move to the right and become visible
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-lg flex items-start justify-start gap-2"
          >
            <FaCheck className="mt-2" />
            {value.content}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default HeroSectionAnimatedBanner;
