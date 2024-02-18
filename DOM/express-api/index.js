const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("backend up");
});

app.get("/sum", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  const sum = a + b;
  res.json(sum);
});

app.listen(port, () => {
  console.log("Server up");
});
