const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.json("backend up");
});

app.get("/interest", (req, res) => {
  const principle = parseFloat(req.query.principle);
  const rate = parseFloat(req.query.rate);
  const time = parseFloat(req.query.time);
  const interest = principle * (rate / 100) * time;
  const total = principle + interest;
  res.json({ total, interest });
});

app.listen(port, () => {
  console.log(`server up at ${port}`);
});
