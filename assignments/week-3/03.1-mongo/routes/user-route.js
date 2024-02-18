const express = require("express");
const router = express.Router();
const app = express();
const userMiddleware = require("../middleware/user");
const { Admin, User, Course } = require("../db/index");
const e = require("express");

app.use(express.json());

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, role, password, courseTaken } = req.body;
  const userData = await User.findOne({ username });
  if (userData) {
    res.json({
      message: "user telah terdaftar",
    });
  } else {
    await User.create({
      username: username,
      role: role,
      password: password,
      courseTaken: courseTaken,
    });
    res.json({
      message: "user berhasil terdaftar",
    });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const data = await Course.find();
  res.json(data);
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  try {
    const { courseId } = req.params;
    const { username } = req.headers;
    const courseIdInt = parseInt(courseId);
    const data = await User.findOne({ username });
    let bought = false;
    for (let i = 0; i < data.courseTaken.length; i++) {
      if (data.courseTaken[i] === courseIdInt) {
        bought = true;
      }
    }
    if (bought) {
      res.json({
        message: "course sudah dibeli",
      });
    } else {
      await User.findOneAndUpdate(
        { username },
        { $push: { courseTaken: courseIdInt } },
        { new: true }
      );
      res.json({
        message: "pembelian berhasil",
      });
    }
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const { username } = req.headers;
  const userData = await User.findOne({ username });
  const listCourseTaken = userData.courseTaken;
  let courses = [];
  for (let i = 0; i < listCourseTaken.length; i++) {
    const data = await Course.findOne({ courseId: listCourseTaken[i] });
    courses.push(data);
  }
  res.json({ courses });
});

module.exports = router;
