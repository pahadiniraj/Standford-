"use client";
import React from "react";
import { motion } from "framer-motion";

const SideMotion = () => {
  return (
    <>
      <motion.div
        className="bg-yellow-400 rounded-3xl -z-10 "
        style={{
          rotate: -10,
          width: "300px",
          height: "250px",
          borderRadius: "50px",
        }}
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          mass: 1,
          delay: 1,
        }}
      ></motion.div>
    </>
  );
};

export default SideMotion;
