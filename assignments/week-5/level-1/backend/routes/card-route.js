const express = require("express");
const app = express();
const router = express.Router();
const { User, Card } = require("../db/db");
const cors = require("cors");
const middleware = require("../middleware/middleware");

const { UserSigninZod, CardZod } = require("../utils/types");

app.use(express.json());
app.use(cors());

router.get("/", async (req, res) => {
  const username = req.headers.username;
  const userData = await User.findOne({ username });
  const role = userData.role;
  const name = username.toLowerCase();
  if (role == "user") {
    const data = await Card.findOne({ name });
    res.json({
      msg: [data],
    });
  } else {
    const data1 = await Card.find({});
    res.json({
      msg: data1,
    });
  }
});

router.post("/card", middleware, async (req, res) => {
  const { name, skill, portofolio } = req.body;
  const cardFormat = CardZod.safeParse(req.body);
  if (cardFormat.success) {
    await Card.create({
      name,
      skill,
      portofolio,
    });
    res.json({
      msg: "card data berhasil ditambah",
    });
  } else {
    res.json({
      msg: cardFormat.error.errors,
    });
  }
});

router.delete("/card/:id", middleware, async (req, res) => {
  const id = req.params.id;
  const dataDeleted = await Card.findOneAndDelete({
    _id: id,
  });
  if (dataDeleted) {
    res.json({
      msg: "berhasil didelete",
    });
  } else {
    res.json({
      msg: "data card tidak ditemukan",
    });
  }
});

router.put("/card/:id", middleware, async (req, res) => {
  const id = req.params.id;
  const { name, skill, portofolio } = req.body;
  await Card.updateOne(
    {
      _id: id,
    },
    {
      name: name,
      skill: skill,
      portofolio: portofolio,
    }
  );
  res.json({
    msg: "berhasil di edit",
  });
});

module.exports = router;
