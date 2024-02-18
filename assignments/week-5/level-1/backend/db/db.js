const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://rizkitaufik:up8tEvp2vjnuwDLo@cluster0.fbkhbdb.mongodb.net/card"
);

// schema
const UserSchema = new mongoose.Schema({
  username: String,
  role: {
    type: String,
    default: "user",
  },
});

const Cardschema = new mongoose.Schema({
  name: String,
  skill: String,
  portofolio: String,
});

const User = mongoose.model("User", UserSchema);
const Card = mongoose.model("Card", Cardschema);

module.exports = {
  User,
  Card,
};
