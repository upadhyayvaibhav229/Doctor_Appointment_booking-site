import { createContext, useState, useEffect, useContext as useReactContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

// Create context
export const AppContext = createContext();

// Provider component
const AppContextProvider = (props) => {
  const currencySymbol = "$";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [doctors, setDoctors] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [loadingDoctors, setLoadingDoctors] = useState(false);
  const [userData, setUserData ] = useState();
  const getDoctorData = async () => {
    setLoadingDoctors(true);
    try {
      const { data } = await axios.get(`${backendUrl}/api/doctor/list`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (data.success) {
        setDoctors(data.doctors);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      if (error.response?.status === 401) {
        setToken("");
        localStorage.removeItem("token");
        toast.error("Session expired. Please login again.");
      } else {
        console.error("Axios error:", error.response?.data || error.message);
        toast.error(error.response?.data?.message || "Failed to fetch doctors");
      }
    }
    setLoadingDoctors(false);
  };

  const loadUserProfileData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/get-profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      if (data.success) {
        setUserData(data.user);
        toast.success(data.message);
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      if (error.response?.status === 401) {
        toast.error("Session expired. Please login again.");
        console.log(error.response?.data || error.message);
        
      }
    }
  }

  useEffect(() => {
    if (token) {
      getDoctorData();
    }
  }, [token]);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  const value = {
    doctors,
    currencySymbol,
    getDoctorData,
    loadingDoctors,
    token,
    setToken,
    backendUrl,
    userData,
    setUserData,
    loadUserProfileData
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useReactContext(AppContext);

export default AppContextProvider;
