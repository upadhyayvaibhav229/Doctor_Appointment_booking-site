import { createContext } from "react";
import { doctors } from "../assets/assets/assets";
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "$";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [doctors, setDoctors] = useState([]);
  const value = {
    doctors,
    currencySymbol,
  };

  const getDoctorData = async () => {
    try {
      const { data } = await axios.get(
        `${backendUrl}/api/admin/list`,
        {
          headers: {
            Authorization: `Bearer ${adminToken}`,
          },
        }
      );

      if (data.success) {
        setDoctors(data.doctors);

      }else{
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Axios error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Failed to fetch doctors");
    }
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
