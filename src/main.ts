import "./style.css";
import "./variables.css";
import Game from "./game/game";

let game: Game | null = null;

export function newGame() {
  game = new Game(null);
}
newGame();

export function saveGame(slot: number) {
  if (game == null) return;
  const allSaves = JSON.parse(localStorage.getItem("stellarDominion2") || "{}");
  allSaves[slot] = game.gameData;
  localStorage.setItem("stellarDominion2", JSON.stringify(allSaves));
  console.log(`Game saved in slot "${slot}"`);
}

export function loadGame(slot: number) {
  const allSaves = JSON.parse(localStorage.getItem("stellarDominion2") || "{}");
  const save = allSaves[slot];
  console.log(`Game loaded from slot "${slot}"`, save);
  new Game(save);
}
