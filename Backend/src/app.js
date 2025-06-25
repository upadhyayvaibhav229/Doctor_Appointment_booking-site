import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import Adminrouter from "./routes/admin.routes.js";
import doctorRoute from "./routes/doctor.routes.js";

const app = express();

const allowedOrigins = [process.env.FRONTEND_URL, process.env.ADMIN_URL];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow no-origin (like Postman) and allowed origins
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS Not Allowed"));
    }
  },
  credentials: true, // Allow cookies or authorization headers
};

app.use(cors(corsOptions)); // Apply CORS middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); // Serve static files from 'public' directory
app.use(cookieParser());

// Routes
app.use("/api/admin", Adminrouter);
app.use("/api/doctor", doctorRoute);

export { app };
