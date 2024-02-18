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

const adminSignupSchema = z.object({
  username: z.string().email(),
  password: z.string().min(5),
});

app.use(express.json());
// Admin Routes
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const adminSignup = adminSignupSchema.safeParse(req.body);
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const adminData = await Admin.findOne({ username });
    if (adminSignup.success) {
      if (adminData) {
        res.json({
          message: "user telah terdaftar",
        });
      } else {
        await Admin.create({
          username: username,
          password: encryptedPassword,
        }).then(() => {
          res.json({
            message: "user berhasil terdaftar",
          });
        });
      }
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
            token: `Bearer ${token}`,
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
  title: z.string(),
  price: z.string(),
  duration: z.string(),
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  try {
    const { title, price, duration } = req.body;
    const postCourses = postCoursesSchema.safeParse(req.body);
    const decode = req.decode; // nangkap passingan data dari middleware
    const courseDataName = await Course.findOne({ title });
    if (decode) {
      if (postCourses.success) {
        if (courseDataName) {
          res.json({
            message: "course telah tercatat",
          });
        } else {
          const courseData = await Course.create({
            title: title,
            price: price,
            duration: duration,
          });
          res.json({
            message: "course berhasil ditambahkan",
            courseNum: courseData._id,
          });
        }
      } else {
        res.json({
          message: postCourses.error.errors,
        });
      }
    }
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    const decode = req.decode; // nangkap passingan data dari middleware
    if (decode) {
      await Course.find().then((data) => {
        res.json(data);
      });
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
