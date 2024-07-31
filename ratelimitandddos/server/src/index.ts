import express from "express";
import rateLimit from "express-rate-limit";
import axios from "axios";
import cors from "cors";
require("dotenv").config();

const app = express();
const port = 3210;
const SECRET_KEY = process.env.SECRET_KEY;

app.use(express.json());
app.use(cors());

const otpLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 3, // Limit each IP to 3 OTP request per windowMs
  message: "terlalu banyak minta OTP",
  standardHeaders: true, // return rate limit info in the 'RateLimit-*' headers
  legacyHeaders: false, // disable the 'X-RateLimit-*' headers
});

const passwordResetLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 OTP request per windowMs
  message: "terlalu banyak melakukan reset password",
  standardHeaders: true, // return rate limit info in the 'RateLimit-*' headers
  legacyHeaders: false, // disable the 'X-RateLimit-*' headers
});

app.get("/", (_req, res) => {
  res.json({
    msg: "halaman utama",
  });
});

const otpStore: Record<string, string> = {};

app.post("/generateOTP", otpLimiter, (req, res) => {
  const email = req.body.email;
  if (!email) {
    res.json({
      msg: "email is required",
    });
  } else {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore.email = otp;

    console.log(`kode otp dari ${email} yaitu ${otp}`);
    res.json({
      msg: "kode otp telah dikirim",
    });
  }
});

app.post("/resetPassword", passwordResetLimiter, async (req, res) => {
  const { email, otp, newPassword, token } = req.body;
  console.log(token);
  if (!token) {
    return res.json({
      msg: "fill the captcha",
    });
  } else {
    const response = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      null,
      {
        params: {
          secret: SECRET_KEY,
          response: token,
        },
      },
    );

    console.log(response);

    if (!response.data.success) {
      return res.json({
        msg: "invalid captcha",
      });
    }

    if (!email || !otp || !newPassword) {
      return res.json({
        msg: "required",
      });
    } else {
      if (parseInt(otpStore.email) === parseInt(otp)) {
        console.log(
          `password dari ${email} direset diganti menjadi ${newPassword}`,
        );
        delete otpStore.email;
        return res.json({
          msg: "password has been reset successfully",
        });
      } else {
        return res.json({
          msg: "invalid otp",
        });
      }
    }
  }
});

app.listen(port, () => {
  console.log(`server up at ${port}`);
});
