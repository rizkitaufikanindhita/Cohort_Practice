"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogger = void 0;
// log data
const store_1 = require("./store");
const GameManager = store_1.GameState.getInstance();
const startLogger = () => {
    setInterval(() => {
        GameManager.logState();
    }, 3000);
};
exports.startLogger = startLogger;
