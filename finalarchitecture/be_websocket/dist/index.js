"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const redis_1 = require("redis");
const ws_1 = __importStar(require("ws"));
require("dotenv").config();
const app = (0, express_1.default)();
const port = 3003;
const httpServer = app.listen(8080);
const wss = new ws_1.WebSocketServer({ server: httpServer });
// WebSocket
wss.on("connection", (ws) => {
    console.log("websocket connected");
    ws.on("error", () => {
        console.log("websocket error");
    });
});
// PubSub
const clientSubscriber = (0, redis_1.createClient)({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_URL,
        port: 11115,
    },
});
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // PubSub
        yield clientSubscriber.connect();
        clientSubscriber.subscribe("channelBiodata", (dataChannel) => {
            console.log(JSON.parse(dataChannel));
            wss.clients.forEach((client) => {
                if (client.readyState === ws_1.default.OPEN) {
                    client.send(dataChannel);
                }
            });
        });
        console.log("redis opened");
        app.listen(port, () => {
            console.log(`server up at ${port}`);
        });
    }
    catch (e) {
        console.log(e);
    }
});
startServer();
app.get("/", (req, res) => {
    res.json({
        msg: "be untuk websocket",
    });
});
