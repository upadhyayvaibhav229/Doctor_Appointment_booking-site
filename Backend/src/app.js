import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import Adminrouter from './routes/admin.routes.js';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN, // Define allowed origin
    credentials: true, // Enable cookies and credentials
  }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from 'public' directory
app.use(cookieParser());

// Routes
app.use('/api/admin', Adminrouter)

export {app};