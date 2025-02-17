"use client";

import React from "react";
import { motion } from "framer-motion";
import ButtonComponent from "../Button/Button";

const CareerOpportunitiesSection = () => {
  return (
    <div className="w-1/2 flex flex-col gap-2">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.5, // Delay between each child animation
              delayChildren: 0.3, // Initial delay before animation starts
            },
          },
        }}
      >
        <motion.h2
          variants={{
            hidden: { x: -100, opacity: 0 }, // Start from the left and invisible
            visible: { x: 0, opacity: 1 }, // Move to the right and become visible
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-2xl font-semibold"
        >
          FIND YOUR CAREER OPPORTUNITIES WITH
        </motion.h2>
        <motion.h1
          variants={{
            hidden: { x: -100, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-6xl font-extrabold"
        >
          STANFORAD
          <br />
          INTERNATIONAL
        </motion.h1>
        <motion.p
          variants={{
            hidden: { x: -100, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-lg"
        >
          Stop waiting and start living your Australian Dream today with
          Stanford International.
        </motion.p>
        <motion.div
          variants={{
            hidden: { x: -100, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-6"
        >
          <ButtonComponent className="rounded-lg py-2 px-4 w-1/4">
            Read More
          </ButtonComponent>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CareerOpportunitiesSection;
