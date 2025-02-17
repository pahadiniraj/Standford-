"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";
import { HeroBanner } from "@/contents/HeroSection/HeroSectionBanner";

const HeroSectionAnimatedBanner = () => {
  const [key, setKey] = useState(0); // State to change the key and trigger re-animation

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1); // Change the key to trigger re-animation
    }, 5000); // Change the animation every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <motion.div className="absolute h-[140px] w-[260px] bg-yellow-400 right-20 top-[220px] rounded-lg p-2 overflow-hidden text-black z-10">
      <motion.ul
        key={key} // Change the key to trigger re-animation
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
