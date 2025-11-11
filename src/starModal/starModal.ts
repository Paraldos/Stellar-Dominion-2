import Modal from "../modal/modal";
import "./starModal.css";
import StarData from "../data/starData";

export default class StarModal extends Modal {
  starData: StarData;

  constructor(starData: StarData) {
    super("Star");
    this.starData = starData;
    this.addSoladSystemImage();
    this.addStarInformation();
    this.addBuildingSlots();
  }

  addSoladSystemImage(): void {
    const img = document.createElement("img");
    img.classList = "starModal__solarSystem";
    img.src = "public/solarSystem.png";
    this.modalContent.appendChild(img);
  }

  addStarInformation(): void {
    const div = document.createElement("div");
    div.classList = "starModal__starInformation";
    div.innerHTML = `<p>Star Title</p>`;
    this.modalContent.appendChild(div);
  }

  addBuildingSlots() {
    const btns = document.createElement("div");
    btns.innerHTML = `<h2>Buildings</h2>`;
    btns.classList = "starModal__buildings";
    this.modalContent.appendChild(btns);

    for (let i = 0; i < 9; i++) {
      const btn = document.createElement("button");
      btn.classList = "starModal__building";
      btn.innerHTML = "Building";
      btns.appendChild(btn);
    }
  }
}
