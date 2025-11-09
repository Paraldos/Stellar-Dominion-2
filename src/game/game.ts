import "./game.css";
import Navbar from "../navbar/navbar";
import Sector from "../data/sector";
import Map from "../map/map";

export default class Game {
  sector = new Sector();

  constructor() {
    document.body.innerHTML = `
	<div class="game">
		<ul class="navbar">
			<li>Map</li>
			<li>Diplomacy</li>
			<li>News</li>
			<li>Research</li>
			<li>Next Turn</li>
		</ul>
		<div class="content"></div>
	</div>`;
    new Navbar();
    new Map();
  }
}
