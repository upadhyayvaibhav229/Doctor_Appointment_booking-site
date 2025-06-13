import { Doctor } from "../models/doctors.model.js";
import { asyncHandler } from "../utils/asynchandler.js";
import validator from 'validator';

const addDoctor = asyncHandler(async (req, res) => {
    const {name, email, Password, address, specialization, experience, fees, degree, about} = req.body;
    const imageFile = req.file;

    // check if all required fields are provided
    if (!name || !email || !Password || !address || !specialization || !experience || !fees || !degree || !about || !imageFile) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // validate email format
    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }

    // validate password length
    if (Password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }

    const existingemail = await Doctor.findOne({ email });
    if (existingemail) {
        return res.status(400).json({ message: "Email already exists" });
    }

    const doctor = await Doctor.create({
        name,
        email,
        Password,
        address,
        specialization,
        experience,
        fees,
        degree,
        about,
        image: imageFile.path, // Store the path of the uploaded image
        availability: "Available", // Default value for availability    
    })

})

export {addDoctor};