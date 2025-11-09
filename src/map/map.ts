import "./map.css";
import kaplay from "kaplay";
import SectorData from "../data/sectorData";
import Background from "./background/background";
import StarObject from "./starObject/starObject";

export default class Map {
  content = document.querySelector(".content");
  pages = document.querySelectorAll(".page");
  map: HTMLCanvasElement | null = document.querySelector(".map");
  sectorData: SectorData;
  k: ReturnType<typeof kaplay>;
  mapSize = { x: 600, y: 400 };
  fieldSize = { x: 0, y: 0 };

  constructor(sectorData: SectorData) {
    this.sectorData = sectorData;
    this.fieldSize = {
      x: this.mapSize.x / this.sectorData.rows,
      y: this.mapSize.y / this.sectorData.columns,
    };
    this.k = this.initKaplay();
    this.map?.classList.add("visible");
    new Background(this.k);
    this.addStars();
    document.addEventListener("openMap", () => this.onOpenMap());
  }

  initKaplay(): ReturnType<typeof kaplay> {
    if (!this.map) {
      throw new Error("Canvas element with class '.map' not found");
    }
    return kaplay({
      width: this.mapSize.x,
      height: this.mapSize.y,
      letterbox: true,
      canvas: this.map,
      global: false,
      scale: 20,
    });
  }

  onOpenMap() {
    this.pages.forEach((el) => el.classList.remove("visible"));
    this.map?.classList.add("visible");
  }

  addStars() {
    this.k.loadSprite("star", "/public/star.png");
    this.sectorData.stars.forEach((star) => {
      new StarObject(star, this.k, this.fieldSize);
    });
  }
}
