const express = require("express");
const router = express.Router();
const app = express();
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db/index");

app.use(express.json());
// Admin Routes
router.post("/signup", async (req, res) => {
  const { username, role, password } = req.body;
  try {
    const adminData = await Admin.findOne({ username });
    if (adminData) {
      res.json({
        message: "user telah terdaftar",
      });
    } else {
      await Admin.create({
        username: username,
        role: role,
        password: password,
      });
      res.json({
        message: "user berhasil terdaftar",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const { courseId, name, price, duration } = req.body;
  const courseData = await Course.findOne({ name });
  if (courseData) {
    res.json({
      message: "course telah tercatat",
    });
  } else {
    await Course.create({
      courseId: courseId,
      name: name,
      price: price,
      duration: duration,
    });
    res.json({
      message: "course berhasil ditambahkan",
    });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const data = await Course.find();
  res.json(data);
});

module.exports = router;
