import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import DoctorProvider from "./Contexts/DoctorContext.jsx";
import AppProvider from "./Contexts/AppContext.jsx";
import AdminProvider from "./Contexts/AdminContext.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./Pages/Admin/Dashboard.jsx";
import AllAppointments from "./Pages/Admin/AllAppointments.jsx";
import DoctorList from "./Pages/Admin/DoctorList.jsx";
import AddDoctor from "./Pages/Admin/AddDoctor.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    // Define your routes here
    <Route path="/" element={<App />}>
      <Route path="/" element={<></>} />
      <Route path="/admin-dashboard" element={<Dashboard />} />
      <Route path="/all-appointments" element={<AllAppointments />} />
      <Route path="/doctors-list" element={<DoctorList />} />
      <Route path="/addDoctor" element={<AddDoctor />} />
    </Route>
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AdminProvider>
      <DoctorProvider>
        <AppProvider>
          <RouterProvider router={router} />
        </AppProvider>
      </DoctorProvider>
    </AdminProvider>
  </StrictMode>
);
