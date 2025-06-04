import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Banner from "./Banner";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const TopDoctors = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(10);
  const { doctors } = useContext(AppContext);

  function showmore() {
    setIsExpanded((prev) => prev + 6);
  }

  return (
    <motion.div
      className="flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h1 className="text-3xl font-semibold" variants={containerVariants}>
        Top Doctors to Book
      </motion.h1>
      <motion.p
        className="sm:w-1/3 text-center text-md"
        variants={containerVariants}
      >
        Simply browse through our extensive list of trusted doctors.
      </motion.p>

      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5 overflow-scroll pt-4">
        {doctors.slice(0, isExpanded).map((item, index) => (
          <motion.div
            key={index}
            className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-7px] transition-all duration-500"
            onClick={() => navigate(`/appointment/${item._id}`)}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <img
              className="bg-[#EAEFFF]"
              src={item.image}
              alt="speciality"
            />
            <div className="p-4">
              <div className="flex gap-2 items-center">
                <p className="bg-green-500 rounded-full w-2 h-2"></p>
                <p className="text-sm text-green-500">Available</p>
              </div>
              <p className="text-xl font-semibold">{item.name}</p>
              <p className="text-sm font-semibold">{item.speciality}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-5">
        {isExpanded < doctors.length ? (
          <motion.svg
            onClick={showmore}
            className="size-6 text-violet-500 cursor-pointer animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            whileTap={{ scale: 0.9 }}
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </motion.svg>
        ) : (
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/doctors"
            className="flex items-center gap-2 bg-primary px-6 md:px-8 py-3 rounded-md text-white text-sm font-medium shadow-md hover:scale-105 transition-transform duration-300"
          >
            See More
          </Link>
        )}
      </div>

      <Banner />
    </motion.div>
  );
};

export default TopDoctors;
