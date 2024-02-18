const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://rizkitaufik:up8tEvp2vjnuwDLo@cluster0.fbkhbdb.mongodb.net/CourseDot"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  username: String,
  role: {
    type: String,
    default: "admin",
  },
  password: String,
});

const UserSchema = new mongoose.Schema({
  username: String,
  role: {
    type: String,
    default: "user",
  },
  password: String,
  courseTaken: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const CourseSchema = new mongoose.Schema({
  title: String,
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
