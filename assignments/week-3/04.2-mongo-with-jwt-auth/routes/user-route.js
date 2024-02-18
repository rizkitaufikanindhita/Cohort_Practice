const express = require("express");
const router = express.Router();
const app = express();
const userMiddleware = require("../middleware/user");
const { Admin, User, Course } = require("../db/index");
const bcrypt = require("bcrypt");
const { z } = require("zod");
require("dotenv").config();
const jwtPassword = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

app.use(express.json());

const userSignupSchema = z.object({
  username: z.string().min(5),
});

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password, courseTaken } = req.body;
  const encryptPass = await bcrypt.hash(password, 10);
  const userSingup = userSignupSchema.safeParse(req.body);
  const userData = await User.findOne({ username });
  if (userSingup.success) {
    if (userData) {
      res.json({
        message: "user telah terdaftar",
      });
    } else {
      await User.create({
        username: username,
        password: encryptPass,
        courseTaken: courseTaken,
      });
      res.json({
        message: "user berhasil terdaftar",
      });
    }
  } else {
    res.json({
      message: userSingup.error.errors,
    });
  }
});

const userSigninSchema = z.object({
  username: z.string(),
  password: z.string(),
});

router.post("/signin", async (req, res) => {
  try {
    const { username, password } = req.body;
    const userSignin = userSigninSchema.safeParse(req.body);
    const userData = await User.findOne({ username });
    const role = userData.role;
    const verifPass = bcrypt.compare(password, userData.password);
    const expiredInNew = 60 * 60 * 1;
    const token = jwt.sign({ username, role }, jwtPassword, {
      expiresIn: expiredInNew,
    });
    if (userSignin.success) {
      if (verifPass) {
        if (!userData) {
          res.json({
            message: "username tidak ada",
          });
        } else {
          res.json({
            message: "login berhasil",
            token: `Bearer ${token}`,
          });
        }
      } else {
        res.json({
          message: "password salah",
        });
      }
    } else {
      res.json({
        message: userSignin.error.errors,
      });
    }
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const token = req.headers.authorization;
    const tokenData = token.split(" ");
    const decode = jwt.verify(tokenData[1], jwtPassword);
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

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  try {
    const { courseId } = req.params;
    const decode = req.decode; // nangkap passingan data dari middleware
    const username = decode.username;
    const data = await User.findOne({
      username,
      courseTaken: { $in: [courseId] },
    });
    let bought = false;
    if (data) {
      bought = true;
    } else {
      bought = false;
    }

    if (decode) {
      if (bought) {
        res.json({
          message: "course sudah dibeli",
        });
      } else {
        await User.updateOne(
          { username },
          { $push: { courseTaken: courseId } }
        );
        res.json({
          message: "pembelian berhasil",
        });
      }
    } else {
      res.json({
        message: "pembelian gagal",
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
  try {
    const decode = req.decode; // nangkap passingan data dari middleware
    const username = decode.username;
    const userData = await User.findOne({ username });
    const listCourseTaken = userData.courseTaken;
    if (decode) {
      const courses = await Course.find({
        _id: {
          $in: listCourseTaken,
        },
      });
      res.json({ courses });
    }
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

module.exports = router;
