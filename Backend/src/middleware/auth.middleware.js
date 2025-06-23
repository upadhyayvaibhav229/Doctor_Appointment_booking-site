import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asynchandler.js";
export const authAdmin = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "No token provided, authorization denied" });
  }

  const token = authHeader.split(" ")[1];

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  if (decoded.email !== process.env.ADMIN_EMAIL) {
    return res.status(403).json({ message: "Forbidden: Invalid admin" });
  }

  req.user = decoded;
  next();
});
