const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const rateLimit = require("express-rate-limit");

// Throttling
const limiter = rateLimit({
  // windowMs: 60 * 1000, // 1 minute
  windowMs: 10000,
  max: 5,
});

app.use(cors());
app.use(limiter);

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
