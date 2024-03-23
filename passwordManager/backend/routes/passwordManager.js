const express = require("express");
const app = express();
const router = express.Router();
const response = require("../utils/response");
const { loginSchema } = require("../utils/types");
const { accountSchema } = require("../utils/types");
const cors = require("cors");
const { User, Manager } = require("../db/db");
const usermiddleware = require("../middleware/usermiddleware");

app.use(express.json());
app.use(cors());

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  const loginFormat = loginSchema.safeParse(req.body);
  if (loginFormat.success) {
    const userData = await User.findOne({ username });
    if (userData) {
      if (userData.password == password) {
        response(200, `${username}`, res);
      } else {
        response(404, "password salah", res);
      }
    } else {
      response(404, "user tidak ada", res);
    }
  } else {
    response(404, loginFormat.error.errors, res);
  }
});

router.get("/dashboard", usermiddleware, async (req, res) => {
  const data = await Manager.find({});
  response(200, data, res);
});

router.post("/dashboard/add", async (req, res) => {
  const { site, account, passwordAccount } = req.body;
  const accountFormat = accountSchema.safeParse(req.body);
  if (accountFormat.success) {
    await Manager.create({
      site: site,
      account: account,
      passwordAccount: passwordAccount,
    });
    response(200, "data added", res);
  } else {
    response(400, accountFormat.error.errors, res);
  }
});

router.delete("/dashboard/:id", usermiddleware, async (req, res) => {
  const id = req.params.id;
  const dataDeleted = await Manager.findOneAndDelete({
    _id: id,
  });
  if (dataDeleted) {
    response(200, "data deleted", res);
  } else {
    response(400, "gagal menghapus", res);
  }
});

router.put("/dashboard/:id", async (req, res) => {
  const id = req.params.id;
  const { account, passwordAccount } = req.body;
  await Manager.updateOne(
    {
      _id: id,
    },
    {
      site: site,
      account: account,
      passwordAccount: passwordAccount,
    }
  );
  response(200, "data edited", res);
});

module.exports = router;
