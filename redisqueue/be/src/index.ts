import express from "express";
import { createClient } from "redis";

const app = express();
const port = 3000;

app.use(express.json());

const client = createClient({
  password: "69nVUgEy9WuWUHlbOBGDFK726grQFb3T",
  socket: {
    host: "redis-11115.c292.ap-southeast-1-1.ec2.redns.redis-cloud.com",
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
  const { no, name, address, email } = req.body;

  try {
    await client.lPush("biodata", JSON.stringify({ no, name, address, email }));
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
