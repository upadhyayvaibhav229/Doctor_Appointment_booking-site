import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets/assets";

const Footer = () => {
  return (
    <>
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl bg-white py-8 px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:text-left lg:items-start gap-8">
          {/* Logo & Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start w-full sm:w-2/3 lg:w-1/3"
          >
            {/* Logo */}
            <img src={assets.logo} alt="logo" className="w-40 mb-4" />
            {/* Description */}
            <p className="text-sm max-w-md">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              since the 1500s.
            </p>
          </motion.div>

          {/* Company Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full sm:w-auto"
          >
            <h1 className="font-semibold text-lg">Company</h1>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-gray-700">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-700">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-700">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-700">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-700">
                  Partners
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full sm:w-auto"
          >
            <h1 className="font-semibold text-lg">Get in touch</h1>
            <p className="text-sm mt-2">+0-000-000-0000</p>
            <a
              href="mailto:"
              className="text-sm text-blue-600 hover:underline"
            >
              email@domain
            </a>
          </motion.div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-sm text-center text-gray-500">
            &copy; 2025 Company. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;

