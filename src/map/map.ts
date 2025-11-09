import "./map.css";
import kaplay from "kaplay";
import Sector from "../data/sector";

export default class Map {
  content = document.querySelector(".content");
  pages = document.querySelectorAll(".page");
  map: HTMLCanvasElement | null = document.querySelector(".map");
  sector: Sector;
  k: ReturnType<typeof kaplay>;
  mapSize = { x: 800, y: 600 };
  fieldSize = { x: 0, y: 0 };

  constructor(sector: Sector) {
    this.sector = sector;
    this.fieldSize = {
      x: this.mapSize.x / this.sector.rows,
      y: this.mapSize.y / this.sector.columns,
    };
    this.k = this.initKaplay();
    this.map?.classList.add("visible");
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
      background: "#31b0b0",
      letterbox: true,
      canvas: this.map,
      global: false,
    });
  }

  onOpenMap() {
    this.pages.forEach((el) => el.classList.remove("visible"));
    this.map?.classList.add("visible");
  }

  addStars() {
    this.k.loadSprite("star", "/public/star.png");
    this.sector.stars.forEach((star) => {
      const posX = star.column * this.fieldSize.x + 25;
      const posY = star.row * this.fieldSize.y + 25;
      this.k.add([
        this.k.sprite("star"),
        this.k.pos(posX, posY),
        this.k.color("#d9ffe2"),
      ]);
    });
  }
}
