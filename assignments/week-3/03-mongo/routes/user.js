const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Admin, User, Course } = require("../db/index");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, role, password } = req.body;
  const userData = await User.findOne(username);
  if (userData) {
    res.json({
      message: "user telah terdaftar",
    });
  }

  await User.create({ username: username, role: role, password: password });
  res.json({
    message: "user berhasil terdaftar",
  });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const data = await Course.find();
  res.json(data);
});

// router.post("/courses/:courseId", userMiddleware, async (req, res) => {
//   // Implement course purchase logic
// });

// router.get("/purchasedCourses", userMiddleware, async (req, res) => {
//   // Implement fetching purchased courses logic
// });
