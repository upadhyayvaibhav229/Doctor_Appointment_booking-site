import mongoose, { Schema } from 'mongoose';

const DoctorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    Password: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: Object,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    fees: {
        type: Number,
        required: true,
    },
    degree: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    availability: {
        type: Boolean,
        default: true, 
    },
    Date: {
        type: Date,
        default: Date.now,
    },
    slot_Booked: {
        type: Object,
        default: {}
    },
}, {minimize: false});



export const Doctor = mongoose.model('Doctor', DoctorSchema);
