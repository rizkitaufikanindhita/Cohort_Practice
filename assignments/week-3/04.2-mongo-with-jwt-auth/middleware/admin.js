const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtPassword = process.env.JWT_SECRET;
const { Admin } = require("../db/index");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  const tokenData = token.split(" ");
  const decode = jwt.verify(tokenData[1], jwtPassword);
  const username = decode.username;
  await Admin.findOne({ username })
    .then(() => {
      req.decode = decode; // passing data to the next middleware or function
      next();
    })
    .catch(() => {
      res.json({
        message: "akun tidak terdaftar",
      });
    });
}

module.exports = adminMiddleware;
