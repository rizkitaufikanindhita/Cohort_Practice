const response = require("../utils/response");
const { User } = require("../db/db");

const usermiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      response(401, "token tidak ada", res);
    } else {
      const data = await User.findOne({ username: token });
      data ? next() : response(400, "login kembali", res);
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = usermiddleware;
