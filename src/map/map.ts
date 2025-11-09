import "./map.css";
import kaplay from "kaplay";

export default class Map {
  content = document.querySelector(".content");
  pages = document.querySelectorAll(".page");
  map: HTMLCanvasElement | null = document.querySelector(".map");

  constructor() {
    this.initMap();
    document.addEventListener("openMap", () => this.onOpenMap());
  }

  onOpenMap() {
    this.pages.forEach((el) => el.classList.remove("visible"));
    this.map?.classList.add("visible");
  }

  initMap() {
    if (!this.map) return;
    kaplay({
      background: `#000000`,
      scale: 2,
      canvas: this.map,
    });
    this.map.classList.add("visible");

    const star = add([rect(32, 32), pos(10, 10), "shape"]);
  }
}
