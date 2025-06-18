import React from "react";
import { assets } from "../../../Fronted/src/assets/assets/assets";
import { useAdminContext } from "../Contexts/AdminContext";

const Navbar = () => {
    const {adminToken, setAdminToken} = useAdminContext();

    const handleLogout = () => {
        adminToken && setAdminToken(null);
        adminToken && localStorage.removeItem("adminToken");
        window.location.reload();
    }
  return (
    <div className="flex items-center justify-between text-sm py-4 p-2 mb-5 border-b border-b-gray-400">
    <div className="flex items-center gap-2">
      <img className="w-44 cursor-pointer" src={assets.logo} alt="logo" />
    <p className="text-[#5f6FFF] border rounded-full px-3 mt-3">Admin</p>
    </div>

      <button onClick={handleLogout} className="cursor-pointer bg-[#5f6FFF] text-white py-2 px-8 rounded-full  text-md">
        Logout
      </button>
    </div>
  );
};

export default Navbar;

