import "./style.css";
import "./variables.css";
import Navbar from "./navbar/navbar";
import Game from "./game/game";

class Main {
  game: Game;

  constructor() {
    new Navbar();
    this.game = new Game();
  }
}

new Main();
