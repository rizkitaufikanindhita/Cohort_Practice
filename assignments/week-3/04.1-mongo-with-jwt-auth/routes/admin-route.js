const express = require("express");
const router = express.Router();
const app = express();
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db/index");
const { z } = require("zod"); // format body
const bcrypt = require("bcrypt"); // password
const jwt = require("jsonwebtoken"); // autentikasi
require("dotenv").config();
const jwtPassword = process.env.JWT_SECRET;

app.use(express.json());
// Admin Routes
router.post("/signup", async (req, res) => {
  const { username, role, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
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
        password: encryptedPassword,
      });
      res.json({
        message: "user berhasil terdaftar",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

const adminSigninSchema = z.object({
  username: z.string().email(),
  password: z.string().min(5),
});

router.post("/signin", async (req, res) => {
  try {
    const { username, password } = req.body;
    const adminSignin = adminSigninSchema.safeParse(req.body);
    const expiredIn = 60 * 60 * 1;
    const adminData = await Admin.findOne({ username });
    const role = adminData.role;
    const token = jwt.sign({ username, role }, jwtPassword, {
      expiresIn: expiredIn,
    });
    if (adminSignin.success) {
      if (!adminData) {
        res.json({
          message: "admin tidak terdaftar",
        });
      } else {
        const comparePassword = await bcrypt.compare(
          password,
          adminData.password
        );
        if (comparePassword) {
          res.json({
            message: "login berhasil",
            token: token,
          });
        } else {
          res.json({
            message: "password salah",
          });
        }
      }
    } else {
      res.json({
        message: adminSignin.error.errors,
      });
    }
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

const postCoursesSchema = z.object({
  courseId: z.string(),
  name: z.string(),
  price: z.string(),
  duration: z.string(),
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  // try {
  const token = req.headers.authorization;
  const { courseId, name, price, duration } = req.body;
  const postCourses = postCoursesSchema.safeParse(req.body);
  const decode = jwt.verify(token, jwtPassword);
  const courseData = await Course.findOne({ courseId });
  const courseDataName = await Course.findOne({ name });
  if (decode) {
    if (postCourses.success) {
      if (courseData || courseDataName) {
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
    } else {
      res.json({
        message: postCourses.error.errors,
      });
    }
  }
  // } catch (err) {
  //   res.json({
  //     message: err,
  //   });
  // }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const token = req.headers.authorization;
  try {
    const decode = jwt.verify(token, jwtPassword);
    if (decode) {
      const data = await Course.find();
      res.json(data);
    } else {
      res.json({
        message: "tidak punya authorization",
      });
    }
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

module.exports = router;
