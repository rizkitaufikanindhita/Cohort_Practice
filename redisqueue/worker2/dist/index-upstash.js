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
const redis_1 = require("@upstash/redis");
const app = (0, express_1.default)();
const port = 3002;
app.use(express_1.default.json());
const redis = new redis_1.Redis({
    url: "https://sure-cheetah-31966.upstash.io",
    token: "AXzeAAIncDFhMTc5YTc3MjBmNDM0ODMwYTliNzQ5ODdjYjAxNzUxOXAxMzE5NjY",
});
app.get("/", (req, res) => {
    res.json({
        msg: "worker 2",
    });
});
// function ambil data dari queue
const processData = () => __awaiter(void 0, void 0, void 0, function* () {
    while (true) {
        try {
            if (redis) {
                const response = yield redis.rpop("biodata");
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
app.listen(port, () => {
    console.log(`server up at ${port}`);
});
