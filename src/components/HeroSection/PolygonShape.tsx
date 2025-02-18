"use client";

import React from "react";
import { motion } from "framer-motion";

const PolygonShape = () => {
  return (
    <div className="absolute w-full h-full">
      <motion.div
        className="inset-0 absolute -z-10 hidden md:block"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 50%, 0% 100%)",
          backgroundColor: "var(--polygon-bg)",
        }}
        initial={{ y: "-100%" }}
        animate={{ y: "0%" }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: 2,
        }}
      ></motion.div>
    </div>
  );
};

export default PolygonShape;
