const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://rizkitaufik:up8tEvp2vjnuwDLo@cluster0.fbkhbdb.mongodb.net/paytmclone"
);

// Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minLength: 4,
    maxLength: 20,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    minLength: 4,
  },

  firstName: {
    type: String,
    required: true,
    lowercase: true,
    minLength: 4,
    maxLength: 20,
  },

  lastName: {
    type: String,
    required: true,
    lowercase: true,
    minLength: 4,
    maxLength: 20,
  },
});

const bankSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  balance: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
const Accounts = mongoose.model("Accounts", bankSchema);

module.exports = {
  User,
  Accounts,
};
