import Modal from "../modal/modal";
import "./starModal.css";
import StarData from "../data/starData";
import ConstructBuildingModal from "../constructBuildingModal/constructBuildingModal";

export default class StarModal extends Modal {
  starData: StarData;

  constructor(starData: StarData) {
    super("Star");
    this.starData = starData;
    this.addSoladSystemImage();
    this.addStarInformation();
    this.addBuildingsArea();
  }

  addSoladSystemImage(): void {
    const img = document.createElement("img");
    img.classList = "starModal__solarSystem";
    img.src = "./solarSystem.png";
    this.modalContent.appendChild(img);
  }

  addStarInformation(): void {
    const div = document.createElement("div");
    div.classList = "starModal__starInformation";
    div.innerHTML = `
		<p>Size: ${this.starData.size}</p>
	`;
    this.modalContent.appendChild(div);
  }

  addBuildingsArea() {
    const buildingsArea = document.createElement("div");
    buildingsArea.innerHTML = `<h2>Buildings</h2>`;
    buildingsArea.classList = "starModal__buildingsArea";
    this.modalContent.appendChild(buildingsArea);
    this.addCurrentConstruction(buildingsArea);
    this.addBuildingSlots(buildingsArea);
  }

  addCurrentConstruction(buildingsArea: HTMLElement) {
    const currentConstruction = document.createElement("div");
    currentConstruction.classList = "starModal__currentConstruction";
    currentConstruction.innerHTML = `
		<p>icon</p>
		<p>name of the Building</p>
		<p>turns left</p>
	`;
    buildingsArea.appendChild(currentConstruction);
  }

  addBuildingSlots(buildingsArea: HTMLElement) {
    const buildingsSlots = document.createElement("div");
    buildingsSlots.classList = "starModal__buildingsSlots";
    buildingsArea.appendChild(buildingsSlots);

    for (let i = 0; i < this.starData.size; i++) {
      const btn = document.createElement("button");
      btn.classList = "starModal__building";
      if (!this.starData.buildings[i]) {
        btn.innerHTML = "-Empty-";
        btn.disabled = true;
      } else {
        btn.innerHTML = "WIP: Building";
        btn.disabled = false;
        btn.addEventListener("click", () => new ConstructBuildingModal());
      }
      buildingsSlots.appendChild(btn);
    }
  }
}
