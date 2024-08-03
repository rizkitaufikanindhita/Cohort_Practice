"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameState = void 0;
class GameState {
    constructor() {
        this.games = [];
    }
    static getInstance() {
        if (!GameState.instance) {
            GameState.instance = new GameState();
        }
        return GameState.instance;
    }
    addGame(game) {
        this.games.push(game);
    }
    getGame() {
        return this.games;
    }
    addMove(gameId, move) {
        const game = this.games.find((game) => game.id === gameId);
        if (game) {
            game.moves.push(move);
        }
    }
    logState() {
        console.log(this.games);
    }
}
exports.GameState = GameState;
