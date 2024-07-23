import express from "express";
import { createClient } from "redis";
require("dotenv").config();

const app = express();

const port = 3001;

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
    msg: "worker 1",
  });
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

// function ambil data dari queue
const processData = async () => {
  while (true) {
    try {
      if (client) {
        const response = await client.brPop("biodata", 0);
        if (response) {
          console.log(response);
        }
      }
    } catch (e) {
      console.log(e);
    }
  }
};

const getData = async () => {
  processData();
  await new Promise((resolve) => setTimeout(resolve, 2000));
};

getData();
