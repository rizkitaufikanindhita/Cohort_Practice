const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const port = process.env.PORT;

const response = require("./utils/response");

const userEndpoints = require("./routes/user-route");

app.use(express.json());
app.use(cors());

app.use("/users", userEndpoints);

app.use((err, req, res, next) => {
  response(400, err, res);
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
