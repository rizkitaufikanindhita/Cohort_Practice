const express = require("express");
const app = express();
const router = express.Router();
const { User } = require("../db/db");
const cors = require("cors");

const { UserSigninZod, CardZod } = require("../utils/types");

app.use(express.json());
app.use(cors());

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const user = username.toLowerCase();
  console.log(username);
  const userFormat = UserSigninZod.safeParse(req.body);

  if (userFormat.success) {
    const userData = await User.findOne({ username: user });
    if (userData) {
      res.json({
        msg: "login berhasil",
      });
    } else {
      res.json({
        msg: "user tidak terdaftar",
      });
    }
  } else {
    res.json({
      msg: userFormat.error.errors,
    });
  }
});

module.exports = router;
