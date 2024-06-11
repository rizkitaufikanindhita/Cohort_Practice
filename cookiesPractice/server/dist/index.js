"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const port = 3450;
const jwtPassword = "superkey";
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    credentials: true,
    origin: "http://localhost:5173"
}));
app.post("/signin", (req, res) => {
    const { id, email } = req.body;
    const token = jsonwebtoken_1.default.sign({ id, email }, jwtPassword);
    // will put the cookie in the set-cookie header
    res.cookie("token", token);
    res.json({
        msg: "signin berhasil"
    });
});
app.get("/user", (req, res) => {
    const token = req.cookies.token;
    const decoded = jsonwebtoken_1.default.verify(token, jwtPassword);
    res.json({
        msg: decoded.email
    });
});
app.post("/signout", (_req, res) => {
    res.clearCookie("token");
    res.json({
        msg: "signout berhasil"
    });
});
app.listen(port, () => {
    console.log(`server up at ${port}`);
});
