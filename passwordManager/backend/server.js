const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const port = process.env.PORT;

const userEndpoints = require("./routes/passwordManager");

app.use(express.json());
app.use(cors());

app.use("/", userEndpoints);

app.listen(port, () => {
  console.log(`Backend up at port ${port}`);
});
