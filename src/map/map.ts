import kaplay from "kaplay";

export default class Map {
  content = document.querySelector(".content");
  canvas = document.createElement("canvas");

  constructor() {
    if (!this.content) return;
    this.content.innerHTML = "";
    this.content.appendChild(this.canvas);

    kaplay({
      width: 200,
      height: 200,
      background: "#d46eb3",
      scale: 2,
      canvas: this.canvas,
    });
  }
}
