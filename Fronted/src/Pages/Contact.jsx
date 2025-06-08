import React from "react";
import { assets } from "../assets/assets/assets";
import { motion } from "framer-motion";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const Contact = () => {
  return (
    <motion.div
      className="container mx-auto my-10 max-w-screen-lg px-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Section Title */}
      <motion.div
        className="text-center text-2xl text-gray-700"
        variants={fadeUp}
        custom={0}
      >
        <p className="uppercase font-semibold">
          Contact <span className="text-black">Us</span>
        </p>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="my-10 flex flex-col md:flex-row items-center justify-between gap-10"
        variants={fadeUp}
        custom={0.2}
      >
        {/* Contact Image */}
        <motion.img
          src={assets.contact_image}
          className="w-full max-w-[360px] rounded-lg shadow-md"
          alt="Contact Us"
          variants={fadeUp}
          custom={0.3}
        />

        {/* Contact Details */}
        <motion.div
          className="flex flex-col gap-6 md:w-2/4 text-sm text-gray-700"
          variants={fadeUp}
          custom={0.4}
        >
          <b className="text-xl capitalize">Our Office</b>

          <p>
            00000 Willms Station <br />
            Suite 000, Washington, USA
          </p>

          <p>
            Tel: (000) 000-0000 <br />
            Email: greatstackdev@gmail.com
          </p>

          <p className="font-semibold">Careers at Prescripto</p>

          {/* Button */}
          <motion.div variants={fadeUp} custom={0.5}>
            <button className="border border-black px-8 py-3 text-sm rounded-md hover:bg-black hover:text-white transition-all duration-300">
              Explore Jobs
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
