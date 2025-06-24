import axios from "axios";
import { createContext, useContext, useState } from "react";

export const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  const [adminToken, setAdminToken] = useState(localStorage.getItem("adminToken")?  localStorage.getItem("adminToken"):null);
    const value = {
    adminToken,
    setAdminToken,
    backendUrl: import.meta.env.VITE_BACKEND_URL,
    };

    const getAllDoctors = async () => {
      try {
        const {data} = await axios.post( `${backendUrl}/api/admin/add-doctors`, {}, {
          
        })
      } catch (error) {
        
      }
    }
  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  return useContext(AdminContext);
};
export default AdminProvider;