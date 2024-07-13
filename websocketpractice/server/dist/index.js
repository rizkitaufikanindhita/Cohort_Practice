"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const app = (0, express_1.default)();
const port = 3211;
// client - server
const httpServer = app.listen(8080);
const wss = new ws_1.WebSocketServer({ server: httpServer });
wss.on("connection", (ws) => {
    console.log("websocket connected");
    ws.on("error", () => {
        console.log("websocket error");
    });
    ws.on("message", (data, isBinary) => {
        ws.send(data, { binary: isBinary });
        const dataString = data.toString();
        console.log(dataString);
    });
    ws.on("close", () => {
        console.log("websocket disconnected");
    });
    ws.send("Hello from server");
});
app.get("/", (req, res) => {
    res.json({
        msg: "Halaman Utama",
    });
});
// server - server
const serverA = app.listen(8081);
const serverWSA = new ws_1.WebSocketServer({ server: serverA }); // server yang bertugas sebagai server menggunakan WebSocketServer
serverWSA.on("connection", (ws) => {
    console.log("server B connected to server A");
    ws.on("message", (message) => {
        console.log(`data dari server B: ${message}`);
        const dataJSON = JSON.parse(message.toString());
        ws.send(`data setelah digabung yaitu ${dataJSON.userid} bernama ${dataJSON.name}`);
    });
    ws.on("close", () => {
        console.log("server B disconnected");
    });
});
app.listen(port, () => {
    console.log(`server berjalan diport ${port}`);
});
