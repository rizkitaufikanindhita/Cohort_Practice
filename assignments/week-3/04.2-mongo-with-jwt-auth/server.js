const express = require("express");
const app = express();
const port = 3000;
const adminEndpoint = require("./routes/admin-route");
const userEndpoint = require("./routes/user-route");

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Backend up");
});

app.use("/admin", adminEndpoint);
app.use("/user", userEndpoint);

app.use((err, req, res, next) => {
  res.json(err);
});

app.listen(port, () => {
  console.log(`server is up at ${port}`);
});
