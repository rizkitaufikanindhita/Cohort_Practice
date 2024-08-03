// store state
interface Game {
  id: string;
  whitePlayer: string;
  blackPlater: string;
  moves: string[];
}

export class GameState {
  private static instance: GameState;
  private games: Game[] = [];

  private constructor() {}

  public static getInstance(): GameState {
    if (!GameState.instance) {
      GameState.instance = new GameState();
    }
    return GameState.instance;
  }

  public addGame(game: Game) {
    this.games.push(game);
  }

  public getGame() {
    return this.games;
  }

  public addMove(gameId: string, move: any) {
    const game = this.games.find((game) => game.id === gameId);
    if (game) {
      game.moves.push(move);
    }
  }

  public logState() {
    console.log(this.games);
  }
}
