import "./map.css";
import kaplay from "kaplay";
import GameData from "../data/gameData";
import Background from "./background/background";
import StarObject from "./starObject/starObject";

export default class Map {
  content = document.querySelector(".content");
  map: HTMLCanvasElement | null = document.querySelector(".map");
  gameData: GameData;
  k: ReturnType<typeof kaplay>;
  mapSize = { x: 600, y: 400 };
  fieldSize = { x: 0, y: 0 };

  constructor(gameData: GameData) {
    this.gameData = gameData;
    this.k = this.initKaplay();
    this.map?.classList.add("visible");
    new Background(this.k);
    this.addStars();
  }

  initKaplay(): ReturnType<typeof kaplay> {
    if (!this.map) {
      throw new Error("Canvas element with class '.map' not found");
    }
    return kaplay({
      width: this.gameData.mapSize.x,
      height: this.gameData.mapSize.y,
      letterbox: true,
      canvas: this.map,
      global: false,
      scale: 20,
    });
  }

  addStars() {
    this.gameData.stars.forEach((star) => {
      new StarObject(star, this.k, this.gameData.cellSize);
    });
  }
}
