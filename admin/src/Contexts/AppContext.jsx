import { createContext, useContext } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const value = {};
  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
export default AppProvider;