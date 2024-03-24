"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response = (statusCode, data, res) => {
    res.json({
        status: statusCode,
        data: data,
    });
};
exports.default = response;
