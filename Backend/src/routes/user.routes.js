import { Router } from "express";
import { loginUser, logoutUser, registerUser } from "../Controllers/user.controllers.js";


const UserRoute = Router();


UserRoute.post('/register', registerUser);
UserRoute.post('/login', loginUser);
UserRoute.post('/logout', logoutUser);

export default UserRoute