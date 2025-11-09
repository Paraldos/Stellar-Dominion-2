import "./game.css";
import Navbar from "../navbar/navbar";
import SectorData from "../data/sectorData";
import Map from "../map/map";
import Research from "../research/research";

export default class Game {
  sectorData = new SectorData();

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
    new Map(this.sectorData);
    new Research();
  }
}
