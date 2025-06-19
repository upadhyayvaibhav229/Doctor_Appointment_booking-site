import React from "react";
import { useAdminContext } from "../Contexts/AdminContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets_admin/assets";

const Sidebar = () => {
  const { adminToken } = useAdminContext();
  return (
    <div className="min-h-screen bg-white border-r">
      {adminToken && (
        <ul className="flex flex-col items-start gap-3">
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#F2F3FF] border-r-3 border-[#5f6FFF]" : "text-[#1F2937]"
              } `
            }
            to="/admin-dashboard"
          >
            <img src={assets.home_icon} alt="" />
            <p>Dashboard</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#F2F3FF] border-r-3 border-[#5f6FFF]" : "text-[#1F2937]"
              } `
            }
            to="/all-appointments"
          >
            <img src={assets.appointment_icon} alt="" />
            <p>Appointments</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#F2F3FF] border-r-3 border-[#5f6FFF]" : "text-[#1F2937]"
              } `
            }
            to="/addDoctor"
          >
            <img src={assets.add_icon} alt="" />
            <p>Add Doctor</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#F2F3FF] border-r-3 border-[#5f6FFF]" : "text-[#1F2937]"
              } `
            }
            to="/doctors-list"
          >
            <img src={assets.people_icon} alt="" />
            <p>Doctor Lists</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
