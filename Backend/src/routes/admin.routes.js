import express from 'express';
import { addDoctor } from '../Controllers/admin.controllers.js';
import { upload } from '../middleware/multer.middleware.js';

const Adminrouter = express.Router();

Adminrouter.post('/add-doctor', upload.single('image'), addDoctor);

export default Adminrouter;