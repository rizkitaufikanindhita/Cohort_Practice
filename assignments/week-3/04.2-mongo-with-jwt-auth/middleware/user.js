const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtPassword = process.env.JWT_SECRET;
const { User } = require("../db/index");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  const tokenData = token.split(" ");
  const decode = jwt.verify(tokenData[1], jwtPassword);
  const username = decode.username;
  await User.findOne({ username })
    .then(() => {
      req.decode = decode; // passing data to the next middleware or function
      next();
    })
    .catch(() => {
      res.json({
        message: "user tidak terdaftar",
      });
    });
}

module.exports = userMiddleware;
