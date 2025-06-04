import React, { useState } from "react";
import logo from "../assets/assets/logo.svg";
import profile from "../assets/assets/profile_pic.png";
import dropdown_icon from "../assets/assets/dropdown_icon.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMany, setShowMany] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <motion.div
      className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={logo}
        alt="logo"
      />

      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to={"/"}>
          <li className="py-1">Home</li>
        </NavLink>
        <NavLink to={"/doctors"}>
          <li className="py-1">All Doctors</li>
        </NavLink>
        <NavLink to={"/about"}>
          <li className="py-1">About</li>
        </NavLink>
        <NavLink to={"/contact"}>
          <li className="py-1">Contact</li>
        </NavLink>
      </ul>

      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={profile} alt="profile" />
            <img className="w-2.5" src={dropdown_icon} alt="dropdown" />

            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-50 hidden group-hover:block"
              >
                <div className="flex flex-col bg-stone-100 p-4 gap-4 min-w-48 rounded-lg shadow-md">
                  <p
                    onClick={() => navigate("/my-Profile")}
                    className="hover:text-black cursor-pointer"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => navigate("/my-Appointments")}
                    className="hover:text-black cursor-pointer"
                  >
                    My Appointments
                  </p>
                  <p
                    onClick={() => setToken(false)}
                    className="hover:text-black cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/login")}
            className="bg-primary text-white py-3 px-8 rounded-full font-bold text-md"
          >
            Create account
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
