import express from 'express';
import { authAdmin } from '../middleware/auth.middleware.js';
import { doctorList } from '../Controllers/Doctor.controllers.js';

const doctorRoute = express.Router();

doctorRoute.get('/list', doctorList)

export default doctorRoute