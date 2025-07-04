import { User } from "../models/user.models.js";
import { asyncHandler } from "../utils/asynchandler.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {v2 as cloudinary} from "cloudinary";

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid email",
    });
  }

  const emailExisting = await User.findOne({ email });
  if (emailExisting) {
    return res.status(400).json({
      success: false,
      message: "User already exists",
    });
  }

  if (password.length < 8) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 8 characters",
    });
  }

  // hashing password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const userData = {
    name,
    email,
    password: hashPassword,
  }

  const user = await User.create(userData);
  if (!user) {
    return res.status(500).json({
      success: false,
      message: "User registration failed",
    });
    
  }


  const token = jwt.sign({ id: userData._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1h",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 1000 * 60 * 60, // 1 hour
  });

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    userData,
    token
  });
});


const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1h",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 1000 * 60 * 60, // 1 hour
  });

   // 🛡️ Only return necessary fields
  const { _id, name, email: userEmail } = user;

  res.status(200).json({
    success: true,
    message: "User logged in successfully",
    user: {
      _id,
      name,
      email: userEmail,
    },
    token
  });
})

const logoutUser = asyncHandler(async (req, res) => {
   res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
   })

    res.status(200).json({
        success: true,
        message: "User logged out successfully"
    })
})

const getProfileDetails = asyncHandler(async (req, res) => {
  const userId = req.user.id; // comes from auth middleware

  const userData = await User.findById(userId).select("-password");

  if (!userData) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "User profile fetched successfully",
    user: userData,
  });
});


// update profile
const updateProfile = asyncHandler(async (req, res) => {
  const { userId, name, phone, address, dob, gender } = req.body;
  const imageFile = req.file;

  if (!name || !phone || !dob || !gender) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  // Start with initial update object
  const updateData = {
    name,
    phone,
    address: JSON.parse(address),
    dob,
    gender,
  };

  // If image is present, upload it and add to updateData
  if (imageFile) {
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    updateData.image = imageUpload.secure_url;
  }

  // Update all at once
  const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
    new: true,
    runValidators: true,
  }).select("-password");

  if (!updatedUser) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "User profile updated successfully",
    user: updatedUser,
  });
});

export {
    registerUser,
    loginUser,
    logoutUser,
    getProfileDetails,
    updateProfile

}
