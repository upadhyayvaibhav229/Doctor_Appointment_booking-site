import { createContext, useContext } from "react";

export const DoctorContext = createContext();

const DoctorProvider = ({ children }) => {
    const value = {};
  return (
    <DoctorContext.Provider value={{}}>
      {children}
    </DoctorContext.Provider>
  );
};

export const useDoctorContext = () => {
  return useContext(DoctorContext);
};
export default DoctorProvider;