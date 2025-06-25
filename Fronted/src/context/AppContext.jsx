import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

// Create context
export const AppContext = createContext();

// Provider component
const AppContextProvider = (props) => {
  const currencySymbol = "$";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [doctors, setDoctors] = useState([]);
  const [adminToken, setAdminToken] = useState(
    localStorage.getItem("adminToken") || ""
  );
  const [loadingDoctors, setLoadingDoctors] = useState(false);

  // Function to fetch doctor data
  const getDoctorData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/doctor/list`, {
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      });

      if (data.success) {
        setDoctors(data.doctors);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Axios error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Failed to fetch doctors");
    }
  };

  // Auto-fetch doctors on mount if token is present
  useEffect(() => {
   getDoctorData();
  }, [adminToken]);

  // Context value to be shared
  const value = {
    doctors,
    currencySymbol,
    getDoctorData,
    loadingDoctors,
    adminToken,
    setAdminToken, // in case you need to update token from other components
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
