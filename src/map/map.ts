import "./map.css";
import kaplay from "kaplay";
import Sector from "../data/sector";
import Star from "../data/star";

export default class Map {
  content = document.querySelector(".content");
  pages = document.querySelectorAll(".page");
  map: HTMLCanvasElement | null = document.querySelector(".map");
  sector: Sector;
  k: ReturnType<typeof kaplay>;
  mapSize = { x: 600, y: 400 };
  fieldSize = { x: 0, y: 0 };

  constructor(sector: Sector) {
    this.sector = sector;
    this.fieldSize = {
      x: this.mapSize.x / this.sector.rows,
      y: this.mapSize.y / this.sector.columns,
    };
    this.k = this.initKaplay();
    this.map?.classList.add("visible");
    this.addBackground();
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

  addBackground() {
    this.k.loadSprite("background", "/public/background.png");
    this.k.add([this.k.sprite("background"), this.k.anchor("center")]);
  }

  addStars() {
    this.k.loadSprite("star", "/public/star.png");
    this.sector.stars.forEach((star) => this.addStar(star));
  }

  addStar(starData: Star) {
    const posX = starData.column * this.fieldSize.x + this.fieldSize.x / 2;
    const posY = starData.row * this.fieldSize.y + this.fieldSize.y / 2;
    const star = this.k.add([
      this.k.sprite("star"),
      this.k.pos(posX, posY),
      this.k.color("#d9ffe2"),
      this.k.anchor("center"),
      this.k.area(),
    ]);
    star.onClick(() => {
      this.k.debug.log("bert");
    });
    star.onHover(() => {
      star.color = this.k.rgb(0, 0, 255);
    });
    star.onHoverEnd(() => {
      star.color = this.k.rgb();
    });
  }
}
