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
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const axios_1 = __importDefault(require("axios"));
const cors_1 = __importDefault(require("cors"));
require("dotenv").config();
const app = (0, express_1.default)();
const port = 3210;
const SECRET_KEY = process.env.SECRET_KEY;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const otpLimiter = (0, express_rate_limit_1.default)({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 3, // Limit each IP to 3 OTP request per windowMs
    message: "terlalu banyak minta OTP",
    standardHeaders: true, // return rate limit info in the 'RateLimit-*' headers
    legacyHeaders: false, // disable the 'X-RateLimit-*' headers
});
const passwordResetLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 OTP request per windowMs
    message: "terlalu banyak melakukan reset password",
    standardHeaders: true, // return rate limit info in the 'RateLimit-*' headers
    legacyHeaders: false, // disable the 'X-RateLimit-*' headers
});
app.get("/", (_req, res) => {
    res.json({
        msg: "halaman utama",
    });
});
const otpStore = {};
app.post("/generateOTP", otpLimiter, (req, res) => {
    const email = req.body.email;
    if (!email) {
        res.json({
            msg: "email is required",
        });
    }
    else {
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        otpStore.email = otp;
        console.log(`kode otp dari ${email} yaitu ${otp}`);
        res.json({
            msg: "kode otp telah dikirim",
        });
    }
});
app.post("/resetPassword", passwordResetLimiter, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, otp, newPassword, token } = req.body;
    console.log(token);
    if (!token) {
        return res.json({
            msg: "fill the captcha",
        });
    }
    else {
        const response = yield axios_1.default.post("https://www.google.com/recaptcha/api/siteverify", null, {
            params: {
                secret: SECRET_KEY,
                response: token,
            },
        });
        if (!response.data.success) {
            return res.json({
                msg: "invalid captcha",
            });
        }
        if (!email || !otp || !newPassword) {
            return res.json({
                msg: "required",
            });
        }
        else {
            if (parseInt(otpStore.email) === parseInt(otp)) {
                console.log(`password dari ${email} direset diganti menjadi ${newPassword}`);
                delete otpStore.email;
                return res.json({
                    msg: "password has been reset successfully",
                });
            }
            else {
                return res.json({
                    msg: "invalid otp",
                });
            }
        }
    }
}));
app.listen(port, () => {
    console.log(`server up at ${port}`);
});
