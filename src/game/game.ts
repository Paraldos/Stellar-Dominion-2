import "./game.css";
import Navbar from "../navbar/navbar";
import Sector from "../data/sector";
import Map from "../map/map";
import Research from "../research/research";

export default class Game {
  sector = new Sector();

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
    new Map(this.sector);
    new Research();
  }
}
