"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const response_1 = __importDefault(require("./utils/response"));
const index_1 = __importDefault(require("./routes/index"));
const statusCode_1 = __importDefault(require("./utils/statusCode"));
const app = (0, express_1.default)();
require("dotenv").config();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (_req, res) => {
    (0, response_1.default)(statusCode_1.default.OK, "server is running", res);
});
app.use("/api/v1", index_1.default);
app.use((err, _req, res, _next) => {
    (0, response_1.default)(statusCode_1.default.Bad_Request, { msg: `ada error karena ${err}` }, res);
});
app.listen(port, () => {
    console.log(`server up at port ${port}`);
});
