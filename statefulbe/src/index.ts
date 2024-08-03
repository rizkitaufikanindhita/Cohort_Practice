// logic
import { GameState } from "./store";
import { startLogger } from "./logger";

const gameManager = GameState.getInstance();

interface Game {
  id: string;
  whitePlayer: string;
  blackPlater: string;
  moves: string[];
}

function getRandomChessMove() {
  const files = ["a", "b", "c", "d", "e", "f", "g", "h"]; // Chess file (column) letters
  const ranks = ["1", "2", "3", "4", "5", "6", "7", "8"]; // Chess rank (row) numbers

  // Randomly select a starting and ending position
  const startFile = files[Math.floor(Math.random() * files.length)];
  const startRank = ranks[Math.floor(Math.random() * ranks.length)];
  const endFile = files[Math.floor(Math.random() * files.length)];
  const endRank = ranks[Math.floor(Math.random() * ranks.length)];

  // Combine to form a move like "e2e4"
  return `${startFile}${startRank}${endFile}${endRank}`;
}

const game: Game = {
  id: "2",
  whitePlayer: "rizki",
  blackPlater: "reysa",
  moves: [],
};

gameManager.addGame(game);

startLogger();

setInterval(() => {
  const randomMove = getRandomChessMove();
  gameManager.addMove("2", randomMove);
}, 3000);
