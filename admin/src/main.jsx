import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import DoctorProvider from "./Contexts/DoctorContext.jsx";
import AppProvider from "./Contexts/AppContext.jsx";
import AdminProvider from "./Contexts/AdminContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AdminProvider>
      <DoctorProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </DoctorProvider>
    </AdminProvider>
  </StrictMode>
);
