import express from "express";
import { Redis } from "@upstash/redis";
require("dotenv").config();

const app = express();

const port = 3001;

app.use(express.json());

const redis = new Redis({
  url: process.env.UPSTASH_URL,
  token: process.env.UPSTASH_TOKEN,
});

app.get("/", (req, res) => {
  res.json({
    msg: "worker 1",
  });
});

// function ambil data dari queue
const processData = async () => {
  while (true) {
    try {
      if (redis) {
        const response = await redis.rpop("biodata");
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

app.listen(port, () => {
  console.log(`server up at ${port}`);
});
