const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, User, Course } = require("../db/index");

// Admin Routes
router.post("/signup", async (req, res) => {
  const { username, role, password } = req.body;
  const adminData = await Admin.findOne(username);
  if (adminData) {
    res.json({
      message: "user telah terdaftar",
    });
  }

  await Admin.create({ username: username, role: role, password: password });
  res.json({
    message: "user berhasil terdaftar",
  });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const { name, price, duration } = req.body;
  const courseData = await Course.findOne(name);
  if (courseData) {
    res.json({
      message: "course telah tercatat",
    });
  }

  await Course.create({ name: name, price: price, duration: duration });
  res.json({
    message: "course berhasil ditambahkan",
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const data = await Course.find();
  res.json(data);
});

module.exports = router;
