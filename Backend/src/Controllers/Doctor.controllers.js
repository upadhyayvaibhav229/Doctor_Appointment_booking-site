import { Doctor } from "../models/doctors.model.js";
import { asyncHandler } from "../utils/asynchandler.js";
const changeDoctorAvailability = asyncHandler(async (req, res) => {
  const docId = req.params.docId;

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
});


export{
    changeDoctorAvailability
}
