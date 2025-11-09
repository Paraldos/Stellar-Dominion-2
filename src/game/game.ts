import "./game.css";
import Navbar from "../navbar/navbar";
import Map from "../map/map";
import Research from "../research/research";
import GameData from "../data/gameData";

export default class Game {
  gameData = new GameData();

  constructor() {
    document.body.innerHTML = `
	<div class="game">
		<ul class="navbar"></ul>
		<div class="content">
			<canvas class="map page"></canvas>
			<div class="research page"></div>
		</div>
	</div>`;
    new Navbar();
    new Map(this.gameData);
    new Research();
  }
}
