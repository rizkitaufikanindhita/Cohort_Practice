import express from "express";
import { createClient } from "redis";
require("dotenv").config();

const app = express();
const port = 3000;

app.use(express.json());

const client = createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_URL,
    port: 11115,
  },
});

app.get("/", (req, res) => {
  res.json({
    msg: "server utama",
  });
});

// memasukkan ke queue
app.post("/submit", async (req, res) => {
  const { no, message } = req.body;

  try {
    await client.lPush("biodata", JSON.stringify({ no, message }));
    res.json({
      msg: "data stored to queue",
    });
  } catch (e) {
    res.json({
      msg: "data failed store to queue",
      data: e,
    });
    console.log(e);
  }
});

const startServer = async () => {
  try {
    await client.connect();
    console.log("redis opened");
    app.listen(port, () => {
      console.log(`server up at ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};

startServer();
