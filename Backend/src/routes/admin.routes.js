import express from 'express';
import { addDoctor } from '../Controllers/admin.controllers.js';

const Adminrouter = express.Router();

Adminrouter.post('/add-doctor', addDoctor);

export default Adminrouter;