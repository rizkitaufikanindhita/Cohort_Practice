"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws"); // server yang bertugas jadi client menggunakan WebSocket
const app = (0, express_1.default)();
const port = 3100;
// ke server A
const serverB = new ws_1.WebSocket("ws://localhost:8081");
serverB.on("open", () => {
    console.log("server B terhubung ke Server A");
    serverB.send(JSON.stringify({
        userid: "001",
        name: "rizki",
    }));
});
serverB.on("message", (message) => {
    console.log(`pesan dari server A: ${message}`);
});
serverB.on("close", () => {
    console.log("koneksi dari server A berakhir");
});
app.get("/", (req, res) => {
    res.json("Halaman Utama Server 2");
});
app.listen(port, () => {
    console.log(`server 2 up at port ${port}`);
});
