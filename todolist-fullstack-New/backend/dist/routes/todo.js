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
    const addTodoSchema = addTodoTypes.safeParse(req.body);
    if (addTodoSchema.success) {
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
    }
    else {
        (0, response_1.default)(statusCode_1.default.Not_Implemented, addTodoSchema.error.errors, res);
    }
}));
router.get("/", authMiddleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.decode;
    const result = yield db_1.default.todo.findMany({
        where: { userId: id },
        select: {
            id: true,
            title: true,
            description: true,
            done: true,
        },
    });
    result
        ? (0, response_1.default)(statusCode_1.default.OK, result, res)
        : (0, response_1.default)(statusCode_1.default.Not_Found, "Tidak ada data", res);
}));
router.delete("/:id", authMiddleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield db_1.default.todo.delete({ where: { id: id } });
    result
        ? (0, response_1.default)(statusCode_1.default.OK, "Item Telah Dihapus", res)
        : (0, response_1.default)(statusCode_1.default.Not_Found, "Item Gagal Dihapus", res);
}));
router.put("/:id", authMiddleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield db_1.default.todo.update({
        where: { id: id },
        data: {
            done: true,
        },
    });
    result
        ? (0, response_1.default)(statusCode_1.default.OK, "Item Berhasil Diupdate", res)
        : (0, response_1.default)(statusCode_1.default.Not_Found, "Item Gagal Diupdate", res);
}));
exports.default = router;
