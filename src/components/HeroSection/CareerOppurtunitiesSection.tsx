"use client";

import React from "react";
import { motion } from "framer-motion";
import ButtonComponent from "../Button/Button";

const CareerOpportunitiesSection = () => {
  return (
    <div className="md:w-1/2 flex flex-col gap-2 bg-transparent relative p-4 text-center md:text-start py-14  ">
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
          className="md:text-base font-semibold"
        >
          FIND YOUR CAREER OPPORTUNITIES WITH
        </motion.h2>
        <motion.h1
          variants={{
            hidden: { x: -100, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="xl:text-6xl md:text-4xl text-3xl font-extrabold"
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
          className="md:text-base lg:text-lg "
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
          <ButtonComponent className="rounded-lg py-2 px-4 md:w-2/5 lg:w-2/5 xl:w-1/4 text-black">
            Read More
          </ButtonComponent>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CareerOpportunitiesSection;
