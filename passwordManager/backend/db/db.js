const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(process.env.MONGODB_URL);

const userSchema = new mongoose.Schema({
  userSchema: {
    type: String,
    lowercase: true,
  },
  password: String,
});

const passwordManagerSchema = new mongoose.Schema({
  site: String,
  account: String,
  passwordAccount: String,
});

const User = mongoose.model("User", userSchema);
const Manager = mongoose.model("Manager", passwordManagerSchema);

module.exports = {
  User,
  Manager,
};
