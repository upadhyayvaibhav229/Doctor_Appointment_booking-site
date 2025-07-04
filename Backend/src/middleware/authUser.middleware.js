import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asynchandler.js";
export const authUser = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "No token provided, authorization denied" });
  }

  const token = authHeader.split(" ")[1];

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  req.user = { id: decoded.id };

  next();
});
