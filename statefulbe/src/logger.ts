// log data
import { GameState } from "./store";

const GameManager = GameState.getInstance();

export const startLogger = () => {
  setInterval(() => {
    GameManager.logState();
  }, 3000);
};
