import jwt from 'jsonwebtoken';
import { asyncHandler } from '../utils/asynchandler.js';

export const authAdmin = asyncHandler(async (req, res, next) => {
  const token = req.cookies?.adminToken;

  if (!token) {
    return res.status(401).json({ message: 'No token provided, authorization denied' });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  if (decoded.email !== process.env.ADMIN_EMAIL) {
    return res.status(403).json({ message: 'Forbidden: Invalid admin' });
  }

  req.user = decoded;
  next();
});
// This middleware checks if the request has a valid admin token.
// If the token is valid and matches the admin email, it allows the request to proceed.