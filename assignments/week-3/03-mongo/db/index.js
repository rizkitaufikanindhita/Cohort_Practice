const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://rizkitaufik:up8tEvp2vjnuwDLo@cluster0.fbkhbdb.mongodb.net/NetCourse"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  username: String,
  role: {
    type: String,
    enum: ["admin", "user"],
  },
  password: String,
});

const UserSchema = new mongoose.Schema({
  username: String,
  role: {
    type: String,
    enum: ["admin", "user"],
  },
  password: String,
});

const CourseSchema = new mongoose.Schema({
  name: String,
  price: String,
  duration: String,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
