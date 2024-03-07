const response = require("../utils/response");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtPassword = process.env.JWT_SECRET;
const { User } = require("../db/db");

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    response(411, "token not provided", res);
  } else {
    const tokenSplit = token.split(" ");
    const decode = jwt.verify(tokenSplit[1], jwtPassword);
    const id = decode.id;
    const userData = await User.findOne({ _id: id });
    if (userData) {
      req.decode = decode;
      next();
    } else {
      response(411, "id tidak terdaftar", res);
    }
  }
};

module.exports = authMiddleware;
