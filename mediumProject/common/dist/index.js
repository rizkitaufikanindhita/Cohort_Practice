"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogEditSchema = exports.blogPostSchema = exports.userSigninSchema = exports.userSignupSchema = void 0;
const zod_1 = require("zod");
exports.userSignupSchema = zod_1.z.object({
    email: zod_1.z.string().min(3),
    name: zod_1.z.string().min(3),
    password: zod_1.z.string().min(3)
});
exports.userSigninSchema = zod_1.z.object({
    email: zod_1.z.string().min(3),
    password: zod_1.z.string().min(3)
});
exports.blogPostSchema = zod_1.z.object({
    title: zod_1.z.string().min(2),
    content: zod_1.z.string().min(5),
    published: zod_1.z.boolean().default(false).optional()
});
exports.blogEditSchema = zod_1.z.object({
    title: zod_1.z.string().optional(),
    content: zod_1.z.string().optional(),
    published: zod_1.z.boolean().optional()
});
