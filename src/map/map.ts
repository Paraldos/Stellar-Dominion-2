import "./map.css";
import kaplay from "kaplay";
import Sector from "../data/sector";

export default class Map {
  content = document.querySelector(".content");
  pages = document.querySelectorAll(".page");
  map: HTMLCanvasElement | null = document.querySelector(".map");
  sector: Sector;
  kaplay: ReturnType<typeof kaplay>;
  mapSize = {
    x: 800,
    y: 600,
  };

  constructor(sector: Sector) {
    this.sector = sector;
    this.kaplay = this.initKaplay();
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
      letterbox: true,
      background: "#000000",
      canvas: this.map,
      global: false,
    });
  }

  onOpenMap() {
    this.pages.forEach((el) => el.classList.remove("visible"));
    this.map?.classList.add("visible");
  }

  addStars() {
    const { add, circle, pos, color } = this.kaplay;
    const fieldSize = {
      x: this.mapSize.x / this.sector.rows,
      y: this.mapSize.y / this.sector.columns,
    };

    this.sector.stars.forEach((star) => {
      const posX = star.column * fieldSize.x + 25;
      const posY = star.row * fieldSize.y + 25;
      add([circle(8), pos(posX, posY), color("#d9ffe2")]);
    });
  }
}
