import { Router } from "express";
import { bookAppointment, getProfileDetails, loginUser, logoutUser, registerUser, updateProfile } from "../Controllers/user.controllers.js";
import { authUser } from "../middleware/authUser.middleware.js";
import { User } from "../models/user.models.js";
import { upload } from "../middleware/multer.middleware.js";


const UserRoute = Router();


UserRoute.post('/register', registerUser);
UserRoute.post('/login', loginUser);
UserRoute.post('/logout', logoutUser);
UserRoute.get('/get-profile', authUser, getProfileDetails);
UserRoute.post('/update-profile', upload.single('image'),authUser, updateProfile);
UserRoute.post('/book-appointment', authUser, bookAppointment)

export default UserRoute;
