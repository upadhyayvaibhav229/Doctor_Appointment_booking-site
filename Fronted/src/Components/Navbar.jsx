import React, { useState } from "react";
import logo from "../assets/assets/logo.svg";
import profile from "../assets/assets/profile_pic.png";
import dropdown_icon from "../assets/assets/dropdown_icon.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets/assets";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
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
            className="bg-primary text-white py-3 px-8 rounded-full font-bold text-md hidden md:block"
          >
            Create account
          </motion.button>
        )}

          <div className="relative">
      {/* Hamburger Menu Icon */}
      <img
        onClick={() => setShowMenu(true)}
        className="w-6 md:hidden cursor-pointer"
        src={assets.menu_icon}
        alt="menu"
      />

      {/* Mobile Sidebar Menu */}
      <div
        className={`${showMenu ? 'fixed right-0 top-0 bottom-0 w-full' : 'w-0 h-0 overflow-hidden'} 
        bg-white z-50 transition-all md:hidden`}
      >
        {/* Header: Logo & Close */}
        <div className="flex justify-between items-center p-4 border-b">
          <img src={assets.logo} alt="logo" className="w-24" />
          <img
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            alt="close"
            className="w-6 cursor-pointer"
          />
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col items-center p-6 gap-4 text-lg">
          <NavLink  to="/" onClick={() => setShowMenu(false)}> <p className='px-4 py-2 rouded inline-block'>HOME</p></NavLink>
          <NavLink  to="/doctors" onClick={() => setShowMenu(false)}><p className='px-4 py-2 rouded inline-block'>ALL DOCTORS</p></NavLink>
          <NavLink to="/about" onClick={() => setShowMenu(false)}><p className='px-4 py-2 rouded inline-block'>ABOUT</p></NavLink>
          <NavLink to="/contact" onClick={() => setShowMenu(false)}><p className='px-4 py-2 rouded inline-block'>CONTACT</p></NavLink>
        </ul>
      </div>
    </div>

      </div>

    </motion.div>
  );
};

export default Navbar;
