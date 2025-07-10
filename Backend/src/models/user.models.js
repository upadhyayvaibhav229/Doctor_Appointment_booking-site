import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  address: {
    line1: { type: String },
    line2: { type: String }
  },
  dob: {
    type: String
  },
  gender: {
    type: String
  },
  bio: {
    type: String
  },
  image: {
    type: String
  }
});
const UserSchema = new Schema(userSchema, {
  timestamps: true
});
export const User = mongoose.model("User", UserSchema); 