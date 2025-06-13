import { asyncHandler } from "../utils/asynchandler";

const addDoctor = asyncHandler(async (req, res) => {
    const {name, email, Password, address, image, specialization, experience, fees, degree, about, availability,Date, slot_Booked} = req.body;
})

export {addDoctor};