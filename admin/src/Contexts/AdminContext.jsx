import axios from "axios";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  const [adminToken, setAdminToken] = useState(
    localStorage.getItem("adminToken") || null
  );
  const [doctors, setDoctors] = useState([]);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const getAllDoctors = async () => {
    try {
      const { data } = await axios.get(
        `${backendUrl}/api/admin/all-doctors`,
        {
          headers: {
            Authorization: `Bearer ${adminToken}`,
          },
        }
      );

      console.log("get all doctors", data);
      // console.log("adminToken", adminToken);

      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Axios error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Failed to fetch doctors");
    }
  };

  const value = {
    adminToken,
    setAdminToken,
    backendUrl,
    getAllDoctors,
    doctors,
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};

export const useAdminContext = () => useContext(AdminContext);
export default AdminProvider;
