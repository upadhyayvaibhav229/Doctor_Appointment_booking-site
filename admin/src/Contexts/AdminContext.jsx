import { createContext, useContext, useState } from "react";

export const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  const [adminToken, setAdminToken] = useState(localStorage.getItem("adminToken")?  localStorage.getItem("adminToken"):null);
    const value = {
    adminToken,
    setAdminToken,
    backendUrl: import.meta.env.VITE_BACKEND_URL,
    };
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