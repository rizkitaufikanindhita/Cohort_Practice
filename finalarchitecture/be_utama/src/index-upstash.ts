import express from "express";
import { Redis } from "@upstash/redis";

const app = express();
const port = 3000;

app.use(express.json());

const redis = new Redis({
  url: "https://sure-cheetah-31966.upstash.io",
  token: "AXzeAAIncDFhMTc5YTc3MjBmNDM0ODMwYTliNzQ5ODdjYjAxNzUxOXAxMzE5NjY",
});

app.get("/", (req, res) => {
  res.json({
    msg: "server utama",
  });
});

// memasukkan ke queue
app.post("/submit", async (req, res) => {
  const { no, name, address, email } = req.body;

  try {
    await redis.lpush("biodata", JSON.stringify({ no, name, address, email }));
    res.json({
      msg: "data stored to queue",
    });
  } catch (e) {
    res.json({
      msg: "data failed store to queue",
      data: e,
    });
  }
});

app.listen(port, () => {
  console.log(`server up at ${port}`);
});
