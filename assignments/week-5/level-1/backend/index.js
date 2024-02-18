const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const userEndpoints = require("./routes/user-route");
const cardEndpoints = require("./routes/card-route");

app.use(cors());
app.use(express.json());

app.use("/users", userEndpoints);
app.use("/cards", cardEndpoints);

app.listen(port, () => {
  console.log(`server listen at port ${port}`);
});
