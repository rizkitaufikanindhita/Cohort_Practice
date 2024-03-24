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
const response_1 = __importDefault(require("../utils/response"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = __importDefault(require("../utils/db"));
const statusCode_1 = __importDefault(require("../utils/statusCode"));
const jwtPassword = process.env.JWT_SECRET;
const authMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authorization;
    if (!token) {
        (0, response_1.default)(statusCode_1.default.Unauthorized, "token not provided", res);
    }
    else {
        const decode = jsonwebtoken_1.default.verify(token.split(" ")[1], jwtPassword);
        const id = decode.id;
        const userData = yield db_1.default.user.findFirst({ where: { id } });
        if (userData) {
            req.decode = decode;
            next();
        }
        else {
            (0, response_1.default)(statusCode_1.default.Unauthorized, "id tidak terdaftar", res);
        }
    }
});
exports.default = authMiddleware;
