import { Doctor } from "../models/doctors.model";
import { asyncHandler } from "../utils/asynchandler";

const changeDoctorAvailability = asyncHandler(async (req, res) => {
    const { docId } = req.body;

  const docData = await Doctor.findById(docId);

  if (!docData) {
    return res.status(404).json({
      success: false,
      message: "Doctor not found",
    });
  }

  docData.availability = !docData.availability;

  await docData.save();

  res.json({
    success: true,
    message: "Availability changed successfully",
    docData,
  });
})


export{
    changeDoctorAvailability
}
