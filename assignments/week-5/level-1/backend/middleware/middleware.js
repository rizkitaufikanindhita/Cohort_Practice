const { User } = require("../db/db");

const middleware = async (req, res, next) => {
  const username = req.headers.username;
  const userData = await User.findOne({ username });
  const role = userData.role;
  if (role == "admin") {
    next();
  } else {
    res.json({
      msg: "role user",
    });
  }
};

module.exports = middleware;
