import express from 'express';
import { addDoctor, adminLogin, allDoctor } from '../Controllers/admin.controllers.js';
import { upload } from '../middleware/multer.middleware.js';
import { authAdmin } from '../middleware/auth.middleware.js';

const Adminrouter = express.Router();

Adminrouter.post('/add-doctor', authAdmin, upload.single('docImg'), addDoctor);
Adminrouter.get('/all-doctors', authAdmin, allDoctor);
Adminrouter.post('/login', adminLogin);

export default Adminrouter;