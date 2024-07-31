"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = require("./swagger");
const port = 3300;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerDocument));
const todos = [
    { no: 1, todos: "todo 1", status: "process" },
    { no: 2, todos: "todo 2", status: "process" },
    { no: 3, todos: "todo 3", status: "process" },
    { no: 4, todos: "todo 4", status: "process" },
    { no: 5, todos: "todo 5", status: "process" },
    { no: 6, todos: "todo 6", status: "process" },
];
app.get("/", (_req, res) => {
    let listTodo = [];
    for (let i = 0; i < 5; i++) {
        if (Math.random() > 0.5) {
            listTodo.push(todos[i]);
        }
    }
    res.json({
        msg: listTodo,
        data: "Data fetched successfully",
        about: "Todo task random API",
    });
});
app.listen(port, () => {
    console.log(`server up at ${port}`);
});
