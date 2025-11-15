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
    new ConstructionArea(this.modalContent, starData);
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
}

class ConstructionArea {
  starData: StarData;
  modalContent: HTMLElement;
  constructionArea: HTMLElement;

  constructor(modalContent: HTMLElement, starData: StarData) {
    this.starData = starData;
    this.modalContent = modalContent;
    this.constructionArea = this.addConstructionArea();
    this.constructionArea.innerHTML = `<h2>Buildings</h2>`;
    // this.addCurrentConstruction();
    this.addBuildings();
    this.addOptions();
  }

  addConstructionArea() {
    const buildingsArea = document.createElement("div");
    buildingsArea.classList = "starModal__constructionArea";
    this.modalContent.appendChild(buildingsArea);
    return buildingsArea;
  }

  addCurrentConstruction() {
    const currentConstruction = document.createElement("div");
    currentConstruction.classList = "starModal__currentConstruction";
    this.constructionArea.appendChild(currentConstruction);

    const addConstruction = document.createElement("button");
    addConstruction.classList = "starModal__addConstruction";

    currentConstruction.innerHTML = `
    	<p>icon</p>
    	<p>name of the Building</p>
    	<p>turns left</p>
    `;
    this.constructionArea.appendChild(currentConstruction);
  }

  addBuildings() {
    const buildings = document.createElement("div");
    buildings.classList = "starModal__buildings";
    this.constructionArea.appendChild(buildings);

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
      buildings.appendChild(btn);
    }
  }

  addOptions() {
    const options = document.createElement("div");
    options.classList = "starModal__options";
    this.constructionArea.appendChild(options);
  }
}
