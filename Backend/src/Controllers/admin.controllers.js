import { Doctor } from "../models/doctors.model.js";
import { asyncHandler } from "../utils/asynchandler.js";
import bcrypt from "bcrypt";
import validator from "validator";
import { uploadOnCloudinary } from "../utils/cloudinary.js"; // ✅ Use your utility here
import jwt from "jsonwebtoken";

const addDoctor = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    password,
    address,
    specialization,
    experience,
    fees,
    degree,
    about,
  } = req.body;

  // console.log(req.body);
  

  const imageFile = req.file;

  // console.log("Received data:", req.body);
  // console.log("Received file:", imageFile);

  // ✅ Check all required fields
  if (
    !name ||
    !email ||
    !password ||
    !address ||
    !specialization ||
    !experience ||
    !fees ||
    !degree ||
    !about ||
    !imageFile
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // ✅ Validate email
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  // ✅ Password length check
  if (password.length < 8) {
    return res
      .status(400)
      .json({ message: "Password must be at least 8 characters long" });
  }

  // ✅ Email already exists check
  const existingDoctor = await Doctor.findOne({ email: email.toLowerCase() });
  if (existingDoctor) {
    return res.status(400).json({ message: "Email already exists" });
  }

  // ✅ Parse address
  let parsedAddress;
  try {
    parsedAddress = JSON.parse(address);
    
  } catch (err) {
    return res
      .status(400)
      .json({ message: "Address must be a valid JSON object" });
  }

      console.log("Parsed address:", parsedAddress);


  // ✅ Upload to Cloudinary via utility
  const imageUpload = await uploadOnCloudinary(imageFile.path);
  if (!imageUpload) {
    return res.status(500).json({ message: "Image upload failed" });
  }

  // ✅ Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // ✅ Create doctor in DB
  const doctor = await Doctor.create({
    name,
    email: email.toLowerCase(),
    Password: hashedPassword,
    address: parsedAddress,
    specialization,
    experience,
    fees,
    degree,
    about,
    image: imageUpload.secure_url, // ✅ Store Cloudinary URL
    date: new Date(),
    // availability: "Available",
  });

  res.status(201).json({
    message: "Doctor added successfully",
    doctor,
  });
});

const allDoctor = asyncHandler(async (req, res) => {
  const doctors = await Doctor.find({}).select('-password');
  console.log(doctors);
  
  res.json({
    message: "Doctors fetched successfully",
    doctors,
  });

})

// admin login

const adminLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = jwt.sign(
      { email: process.env.ADMIN_EMAIL },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.cookie("adminToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "Admin login successful",
      token, // optionally send token to frontend
    });
  }

  return res
    .status(401)
    .json({ success: false, message: "Invalid admin credentials" });
});

export { addDoctor, adminLogin, allDoctor };
