import express from "express";
import { createClient } from "redis";
import WebSocket, { WebSocketServer } from "ws";

require("dotenv").config();

const app = express();

const port = 3003;
const httpServer = app.listen(8080);

const wss = new WebSocketServer({ server: httpServer });

// WebSocket
wss.on("connection", (ws) => {
  console.log("websocket connected");

  ws.on("error", () => {
    console.log("websocket error");
  });
});

// PubSub
const clientSubscriber = createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_URL,
    port: 11115,
  },
});

const startServer = async () => {
  try {
    // PubSub
    await clientSubscriber.connect();

    clientSubscriber.subscribe("channelBiodata", (dataChannel) => {
      console.log(JSON.parse(dataChannel));

      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(dataChannel);
        }
      });
    });

    console.log("redis opened");
    app.listen(port, () => {
      console.log(`server up at ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};

startServer();

app.get("/", (req, res) => {
  res.json({
    msg: "be untuk websocket",
  });
});
