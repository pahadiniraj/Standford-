import React from "react";
import { motion } from "framer-motion";
import { BiSolidPhoneCall } from "react-icons/bi";

const CallAlert = () => {
  return (
    <motion.div
      animate={{
        // y: [0, -1, 0, 1, 0], // Slight up and down movement
        rotate: [0, -10, 10, -10, 10, 0], // Reduced rotation for a subtle effect
        scale: [1, 1.05, 1], // Slight scale-up to mimic vibration
      }}
      transition={{
        duration: 0.5, // Fast shake
        repeat: Infinity, // Loop the animation
        repeatType: "loop", // Loop type
        ease: "easeInOut", // Smooth easing
        repeatDelay: 1, // Delay between shakes
      }}
      whileHover={{ scale: 1 }} // Slightly scale up on hover
    >
      <BiSolidPhoneCall className="text-xl" />
    </motion.div>
  );
};

export default CallAlert;
