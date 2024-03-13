const express = require("express");
const router = express.Router();
const response = require("../utils/response");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtPassword = process.env.JWT_SECRET;

const { User, Accounts } = require("../db/db");
const { signUpFormat, signInFormat } = require("../utils/types");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/signup", async (req, res) => {
  const { username, password, firstName, lastName } = req.body;
  const passwordString = password.toString();
  const expired = 60 * 60 * 1; // 1jam
  const signUpSchema = signUpFormat.safeParse(req.body);
  if (signUpSchema.success) {
    const userData = await User.findOne({ username });
    if (userData) {
      response(403, "user telah terdaftar", res);
    } else {
      const hashPassword = await bcrypt.hash(passwordString, 10);
      await User.create({
        username: username,
        password: hashPassword,
        firstName: firstName,
        lastName: lastName,
      });
      const userDataNew = await User.findOne({ username });
      const id = userDataNew._id;
      const token = jwt.sign({ username, id }, jwtPassword, {
        expiresIn: expired,
      });
      await Accounts.create({
        userId: id,
        balance: Math.floor(Math.random() * 10000) + 1,
      });
      response(
        200,
        {
          message: "User Berhasil Didaftarkan",
          token: token,
        },
        res
      );
    }
  } else {
    response(404, signUpSchema.error.errors, res);
  }
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  const signInSchema = signInFormat.safeParse(req.body);
  const passwordNew = password.toString();
  const expired = 60 * 60 * 1;
  if (signInSchema.success) {
    const userData = await User.findOne({ username });
    if (userData) {
      const passwordVerif = await bcrypt.compare(
        passwordNew,
        userData.password
      );
      if (passwordVerif) {
        const id = userData._id;
        const token = jwt.sign({ username, id }, jwtPassword, {
          expiresIn: expired,
        });
        response(
          200,
          {
            message: "Login Berhasil",
            token: token,
          },
          res
        );
      } else {
        response(411, "Password Salah", res);
      }
    } else {
      response(411, "Username tidak terdaftar", res);
    }
  } else {
    response(411, signInSchema.error.errors, res);
  }
});

router.put("/", authMiddleware, async (req, res) => {
  const { password, firstName, lastName } = req.body;
  const { id } = req.decode;
  const hashPassword = await bcrypt.hash(password, 10);
  const userData = await User.findOne({ _id: id });
  const userPassword = await bcrypt.compare(password, userData.password);

  let passwordBaru;
  if (userPassword) {
    passwordBaru = userData.password;
  } else {
    passwordBaru = hashPassword;
  }

  const edit = await User.findOneAndUpdate(
    { _id: id },
    {
      password: passwordBaru,
      firstName: firstName,
      lastName: lastName,
    }
  );
  if (edit) {
    response(200, "update berhasil", res);
  } else {
    response(400, "error", res);
  }
});

router.get("/bulk", authMiddleware, async (req, res) => {
  const filter = req.query.filter;
  const userData = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });
  if (userData) {
    response(
      200,
      userData.map((data) => ({
        username: data.username,
        firstname: data.firstName,
        lastname: data.lastName,
        id: data._id,
      })),
      res
    );
  } else {
    response(400, "error", res);
  }
});

module.exports = router;
