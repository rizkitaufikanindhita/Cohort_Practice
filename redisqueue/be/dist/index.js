"use strict";
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
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
const client = (0, redis_1.createClient)({
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
app.post("/submit", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { no, name, address, email } = req.body;
    try {
        yield client.lPush("biodata", JSON.stringify({ no, name, address, email }));
        res.json({
            msg: "data stored to queue",
        });
    }
    catch (e) {
        res.json({
            msg: "data failed store to queue",
            data: e,
        });
        console.log(e);
    }
}));
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
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
