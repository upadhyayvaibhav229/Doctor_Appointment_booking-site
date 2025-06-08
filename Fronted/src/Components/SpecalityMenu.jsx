import React from "react";
import { specialityData } from "../assets/assets/assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};


const SpecalityMenu = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-16 text-gray-800 gap-4"
      id="specality"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h1 className="text-3xl font-semibold" variants={itemVariants}>
        Find by Speciality
      </motion.h1>
      <motion.p
        className="sm:w-1/3 text-center text-md"
        variants={itemVariants}
      >
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </motion.p>

      <motion.div
        className="flex justify-center items-center gap-4 mt-5 w-full overflow-scroll pt-4"
        variants={containerVariants}
      >
        {specialityData.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-2 cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
            variants={itemVariants}
          >
            <Link
              to={`/doctors/${item.speciality}`}
              onClick={() => window.scrollTo(0, 0)}
              className="flex flex-col items-center gap-2"
            >
              <img
                className="w-20 h-20 rounded-full"
                src={item.image}
                alt={item.speciality}
              />
              <p className="text-sm font-semibold">{item.speciality}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SpecalityMenu;
