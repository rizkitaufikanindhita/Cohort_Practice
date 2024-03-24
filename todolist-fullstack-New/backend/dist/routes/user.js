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
const response_1 = __importDefault(require("../utils/response"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = __importDefault(require("../utils/db"));
const zodTypes_1 = __importDefault(require("../utils/zodTypes"));
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const statusCode_1 = __importDefault(require("../utils/statusCode"));
const router = express_1.default.Router();
const jwtPassword = process.env.JWT_SECRET;
const { signUpTypes, signInTypes } = zodTypes_1.default;
const expired = 60 * 60 * 1;
router.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, firstName, lastName } = req.body;
    const passwordString = password.toString();
    const signUpSchema = signUpTypes.safeParse(req.body);
    if (signUpSchema.success) {
        const userData = yield db_1.default.user.findFirst({
            where: { username },
        });
        if (userData) {
            (0, response_1.default)(statusCode_1.default.Conflict, "User Telah Terdaftar", res);
        }
        else {
            const hashPassword = yield bcrypt_1.default.hash(passwordString, 10);
            yield db_1.default.user.create({
                data: {
                    username: username.toLowerCase(),
                    password: hashPassword,
                    firstName: firstName.toLowerCase(),
                    lastName: lastName.toLowerCase(),
                },
            });
            const userDataNew = yield db_1.default.user.findFirst({ where: { username } });
            const id = userDataNew === null || userDataNew === void 0 ? void 0 : userDataNew.id;
            const token = jsonwebtoken_1.default.sign({ username, id }, jwtPassword, {
                expiresIn: expired,
            });
            (0, response_1.default)(statusCode_1.default.OK, {
                message: "User Berhasil Ditambahkan",
                token: token,
            }, res);
        }
    }
    else {
        (0, response_1.default)(statusCode_1.default.Bad_Request, signUpSchema.error.errors, res);
    }
}));
router.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const signInSchema = signInTypes.safeParse(req.body);
    if (signInSchema.success) {
        const userData = yield db_1.default.user.findFirst({ where: { username } });
        if (userData) {
            const passwordVerif = yield bcrypt_1.default.compare(password, userData.password);
            if (passwordVerif) {
                const id = userData.id;
                const username = userData.username;
                const token = jsonwebtoken_1.default.sign({ username, id }, jwtPassword, {
                    expiresIn: expired,
                });
                (0, response_1.default)(statusCode_1.default.OK, {
                    message: "Login berhasil",
                    token: token,
                }, res);
            }
            else {
                (0, response_1.default)(statusCode_1.default.Unauthorized, "Password Salah", res);
            }
        }
        else {
            (0, response_1.default)(statusCode_1.default.Not_Found, "Username Tidak Terdaftar", res);
        }
    }
    else {
        (0, response_1.default)(statusCode_1.default.Bad_Request, signInSchema.error.errors, res);
    }
}));
router.put("/", authMiddleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, firstName, lastName } = req.body;
    const { id } = req.decode;
    const signUpSchema = signUpTypes.safeParse(req.body);
    if (signUpSchema.success) {
        const hashPassword = yield bcrypt_1.default.hash(password, 10);
        const userData = yield db_1.default.user.findFirst({ where: { id } });
        const userPassword = yield bcrypt_1.default.compare(password, userData.password);
        let passwordBaru;
        if (userPassword) {
            passwordBaru = userData.password;
        }
        else {
            passwordBaru = hashPassword;
        }
        const edit = yield db_1.default.user.update({
            where: { id: id },
            data: {
                username: username,
                password: passwordBaru,
                firstName: firstName,
                lastName: lastName,
            },
        });
        if (edit) {
            (0, response_1.default)(statusCode_1.default.OK, "update berhasil", res);
        }
        else {
            (0, response_1.default)(statusCode_1.default.Bad_Request, "error", res);
        }
    }
    else {
        (0, response_1.default)(statusCode_1.default.Bad_Request, signUpSchema.error.errors, res);
    }
}));
exports.default = router;
