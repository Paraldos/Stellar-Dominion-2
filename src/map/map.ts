import "./map.css";
import kaplay from "kaplay";
import Sector from "../data/sector";

export default class Map {
  content = document.querySelector(".content");
  pages = document.querySelectorAll(".page");
  map: HTMLCanvasElement | null = document.querySelector(".map");
  sector: Sector;
  kaplay: ReturnType<typeof kaplay>;

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
      background: "#000000",
      scale: 2,
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
    this.sector.stars.forEach((star) => {
      add([circle(16), pos(star.column * 50, star.row * 50), color("#d9ffe2")]);
    });
  }
}
