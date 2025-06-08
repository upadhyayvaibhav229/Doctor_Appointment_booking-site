import React from "react";
import { motion } from "framer-motion";
import group_profiles from "../assets/assets/group_profiles.png";
import arrow_icon from "../assets/assets/arrow_icon.svg";
import header_img from "../assets/assets/header_img.png";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Header = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row bg-primary rounded-lg px-6 md:px-10 lg:px-20 overflow-hidden"
    >
      {/* Left Side */}
      <motion.div
        className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left justify-center gap-6 md:py-[10vw]"
        variants={childVariants}
      >
        <motion.p
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight"
          variants={childVariants}
        >
          Book Appointments <br /> With Trusted Doctors
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light"
          variants={childVariants}
        >
          <img className="w-24 md:w-28" src={group_profiles} alt="Profiles" />
          <p className="max-w-sm">
            Simply browse through our extensive list of trusted doctors,{" "}
            <br className="hidden sm:block" />
            Schedule your application hassle-free
          </p>
        </motion.div>

        <motion.a
          href="#specality"
          className="flex items-center gap-2 bg-white px-6 md:px-8 py-3 rounded-md text-gray-800 text-sm font-medium shadow-md hover:scale-105 transition-transform duration-300"
          variants={childVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Appointments <img className="w-3" src={arrow_icon} alt="Arrow" />
        </motion.a>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="md:w-1/2 relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        <img
          className="w-full h-auto rounded-md md:absolute bottom-0"
          src={header_img}
          alt="Header"
        />
      </motion.div>
    </motion.div>
  );
};

export default Header;
