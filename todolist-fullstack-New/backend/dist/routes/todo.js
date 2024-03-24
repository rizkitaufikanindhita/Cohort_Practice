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
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const zodTypes_1 = __importDefault(require("../utils/zodTypes"));
const db_1 = __importDefault(require("../utils/db"));
const statusCode_1 = __importDefault(require("../utils/statusCode"));
const response_1 = __importDefault(require("../utils/response"));
const router = express_1.default.Router();
const { addTodoTypes } = zodTypes_1.default;
router.post("/add", authMiddleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = req.body;
    const userId = req.decode.id;
    const result = yield db_1.default.todo.create({
        data: {
            title: title,
            description: description,
            userId: userId,
        },
    });
    result
        ? (0, response_1.default)(statusCode_1.default.OK, "Todo Berhasil Ditambahkan", res)
        : (0, response_1.default)(statusCode_1.default.Unprocessable_Entity, "Todo Gagal Ditambahkan", res);
}));
exports.default = router;
