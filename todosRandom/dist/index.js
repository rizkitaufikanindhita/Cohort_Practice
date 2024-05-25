"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const port = 3300;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const todos = [
    { no: 1, todos: 'todo 1', status: 'process' },
    { no: 2, todos: 'todo 2', status: 'process' },
    { no: 3, todos: 'todo 3', status: 'process' },
    { no: 4, todos: 'todo 4', status: 'process' },
    { no: 5, todos: 'todo 5', status: 'process' }
];
app.get('/', (_req, res) => {
    let listTodo = [];
    for (let i = 0; i < 5; i++) {
        if (Math.random() > 0.5) {
            listTodo.push(todos[i]);
        }
    }
    res.json({
        msg: listTodo
    });
});
app.listen(port, () => {
    console.log(`server up at ${port}`);
});
