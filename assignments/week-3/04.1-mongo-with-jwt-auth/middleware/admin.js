const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtPassword = process.env.JWT_SECRET;

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  const decode = jwt.verify(token, jwtPassword);
  const role = decode.role;
  if (role == "admin") {
    next();
  } else {
    res.json({
      message: "bukan admin",
    });
  }
}

module.exports = adminMiddleware;
