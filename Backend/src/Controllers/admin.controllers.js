import { Doctor } from "../models/doctors.model.js";
import { asyncHandler } from "../utils/asynchandler.js";
import bcrypt from "bcrypt";
import validator from "validator";
import { uploadOnCloudinary } from "../utils/cloudinary.js"; // ✅ Use your utility here

const addDoctor = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    Password,
    address,
    specialization,
    experience,
    fees,
    degree,
    about,
  } = req.body;

  const imageFile = req.file;

  console.log("Received data:", req.body);
  console.log("Received file:", imageFile);

  // ✅ Check all required fields
  if (
    !name ||
    !email ||
    !Password ||
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
  if (Password.length < 8) {
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

  // ✅ Upload to Cloudinary via utility
  const imageUpload = await uploadOnCloudinary(imageFile.path);
  if (!imageUpload) {
    return res.status(500).json({ message: "Image upload failed" });
  }

  // ✅ Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(Password, salt);

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


// admin login

const adminLogin = asyncHandler(async (req, res) => {
    const { email, Password } = req.body;

    if (email === process.env.ADMIN_EMAIL && Password === process.env.ADMIN_PASSWORD) {
        return res.status(200).json({ message: "Admin login successful" });
        
    }
    return res.status(401).json({ message: "Invalid admin credentials" });
    
})

export { addDoctor };