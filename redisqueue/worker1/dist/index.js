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
require("dotenv").config();
const app = (0, express_1.default)();
const port = 3001;
app.use(express_1.default.json());
const client = (0, redis_1.createClient)({
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
// function ambil data dari queue
const processData = () => __awaiter(void 0, void 0, void 0, function* () {
    while (true) {
        try {
            if (client) {
                const response = yield client.brPop("biodata", 0);
                if (response) {
                    console.log(response);
                }
            }
        }
        catch (e) {
            console.log(e);
        }
    }
});
const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    processData();
    yield new Promise((resolve) => setTimeout(resolve, 2000));
});
getData();
