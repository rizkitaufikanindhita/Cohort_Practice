"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const signUpTypes = zod_1.z.object({
    username: zod_1.z.string().min(4).max(20),
    password: zod_1.z.string().min(3).max(20),
    firstName: zod_1.z.string().min(3).max(20),
    lastName: zod_1.z.string().min(3).max(20),
});
const signInTypes = zod_1.z.object({
    username: zod_1.z.string().min(4).max(20),
    password: zod_1.z.string().min(3).max(20),
});
const addTodoTypes = zod_1.z.object({
    title: zod_1.z.string().min(3),
    description: zod_1.z.string().min(3),
    userId: zod_1.z.string(),
});
exports.default = { signUpTypes, signInTypes, addTodoTypes };
