import { createContext, useContext } from "react";

export const AdminContext = createContext();

const AdminProvider = ({ children }) => {
    const value = {};
  return (
    <AdminContext.Provider value={{}}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  return useContext(AdminContext);
};
export default AdminProvider;