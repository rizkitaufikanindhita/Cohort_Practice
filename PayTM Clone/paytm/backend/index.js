const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const indexEndpoints = require("./routes/index");

try {
  app.use(express.json());
  app.use(cors());

  app.use("/api/v1", indexEndpoints);

  app.listen(port, () => {
    console.log(`server up at port : ${port}`);
  });
} catch (e) {
  console.log(e);
}
