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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const updateUser = (id_1, _a) => __awaiter(void 0, [id_1, _a], void 0, function* (id, { firstName, lastName }) {
    const userData = yield prisma.user.update({
        where: { id },
        data: {
            firstName: firstName,
            lastName: lastName,
        },
        select: {
            id: true,
            username: true,
            firstName: true,
            lastName: true,
        },
    });
    console.log(userData);
});
updateUser("clu44r37b00009mr9y05im4h9", {
    firstName: "rizki",
    lastName: "anindhita",
});
