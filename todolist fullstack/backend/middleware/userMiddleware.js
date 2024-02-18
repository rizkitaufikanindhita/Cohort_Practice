const { response } = require("express");
const { User } = require("../db/db");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtPassword = process.env.JWT_SECRET;

const userMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      response(401, "token not provided", res);
    } else {
      const tokenData = token.split(" ");
      const decode = jwt.verify(tokenData[1], jwtPassword);
      const id = decode.id;
      const userData = await User.findOne({ _id: id });
      if (userData) {
        req.decode = decode;
        next();
      } else {
        response(400, "silahkan login kembali", res);
      }
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = userMiddleware;
