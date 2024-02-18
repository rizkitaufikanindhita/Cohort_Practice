const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtPassword = process.env.JWT_SECRET;

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  const decode = jwt.verify(token, jwtPassword);
  const role = decode.role;
  if (role == "user") {
    next();
  } else {
    res.json({
      message: "salah role",
    });
  }
}

module.exports = userMiddleware;
