import React from "react";
import { assets } from "../assets/assets/assets";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <motion.div
      className="container mx-auto px-4 my-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.div className="text-center text-2xl text-[#707070]" variants={fadeUp}>
        <p>
          About <span className="text-gray-700 font-semibold">Us</span>
        </p>
      </motion.div>

      {/* Image & Text Section */}
      <motion.div
        className="my-10 flex flex-col md:flex-row items-center gap-8"
        variants={fadeUp}
      >
        <img
          src={assets.about_image}
          className="w-full max-w-[360px]"
          alt="about"
        />

        <div className="flex flex-col justify-center gap-6 text-sm text-gray-600 md:w-2/4">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform.
          </p>

          <b className="text-base">Our Vision</b>
          <p>
            Our vision is to revolutionize the healthcare industry by providing
            a comprehensive platform that simplifies health management.
          </p>
        </div>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div className="text-2xl my-4 text-center" variants={fadeUp}>
        <p>
          Why <span className="text-gray-700 font-semibold">Choose Us</span>
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {[
          {
            title: "EFFICIENCY:",
            text: "Streamlined appointment scheduling that fits into your busy lifestyle.",
          },
          {
            title: "CONVENIENCE:",
            text: "Access to a network of trusted healthcare professionals in your area.",
          },
          {
            title: "PERSONALIZATION:",
            text: "Tailored recommendations and reminders to help you stay on top of your health.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="border px-8 py-10 flex flex-col gap-4 text-[15px] 
              hover:bg-primary hover:text-white transition-all duration-300 
              text-gray-600 cursor-pointer rounded-lg shadow-md hover:shadow-lg"
            variants={fadeUp}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <b className="text-lg">{item.title}</b>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default About;
