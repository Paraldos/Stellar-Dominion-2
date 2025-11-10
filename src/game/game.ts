import "./game.css";
import Navbar from "../navbar/navbar";
import Map from "../map/map";
import GameData from "../data/gameData";

export default class Game {
  gameData = new GameData();

  constructor() {
    document.body.innerHTML = `
	<div class="game">
		<ul class="navbar"></ul>
		<div class="content">
			<canvas class="map page"></canvas>
		</div>
	</div>`;
    new Navbar(this.gameData);
    new Map(this.gameData);
  }
}
