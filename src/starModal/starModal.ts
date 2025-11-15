import Modal from "../modal/modal";
import "./starModal.css";
import StarData from "../data/starData";
import { Building, listOfBuildings } from "../data/building";

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
  queue: HTMLElement | null;
  options: HTMLElement | null;

  constructor(modalContent: HTMLElement, starData: StarData) {
    this.starData = starData;
    modalContent.innerHTML += `
		<div class="starModal__constructionArea">
			<h2>Construction</h2>
			<div class="starModal__constructionQueue"></div>
			<div class="starModal__constructionOptions"></div>
		</div>`;
    this.queue = document.querySelector(".starModal__constructionQueue");
    this.options = document.querySelector(".starModal__constructionOptions");
    this.addQueeItems();
    listOfBuildings.forEach((building) => this.addOption(building));
  }

  //   addBuildings() {
  //     const buildings = document.createElement("div");
  //     buildings.classList = "starModal__buildings";
  //     this.constructionArea.appendChild(buildings);

  //     for (let i = 0; i < this.starData.size; i++) {
  //       const btn = document.createElement("button");
  //       btn.classList = "starModal__building";
  //       if (!this.starData.buildings[i]) {
  //         btn.innerHTML = "-Empty-";
  //         btn.disabled = true;
  //       } else {
  //         btn.innerHTML = "WIP: Building";
  //         btn.disabled = false;
  //         btn.addEventListener("click", () => new ConstructBuildingModal());
  //       }
  //       buildings.appendChild(btn);
  //     }
  //   }

  addQueeItems() {
    if (this.queue == null) return;
    this.queue.innerHTML = "";
    this.starData.buildings.forEach((building) => this.addQueueItem(building));
  }

  addQueueItem(building: Building) {
    // guard
    if (this.queue == null) return;
    // content
    const btn = document.createElement("button");
    btn.classList = "starModal__queueItem";
    btn.innerHTML = `
	<img src="${building.imageSrc}" alt="${building.title}" />
	<span>Progress: ${building.constructionProgress}</span>`;
    this.queue.appendChild(btn);
  }

  addOption(building: Building) {
    // guard
    if (this.options == null) return;
    if (this.queue == null) return;
    // content
    const btn = document.createElement("button");
    btn.classList = "starModal__constructionOption";
    btn.innerHTML = `<img src="${building.imageSrc}" alt="${building.title}" />`;
    this.options.appendChild(btn);

    // logic
    btn.addEventListener("click", () => {
      const newBuilding = structuredClone(building);
      this.starData.buildings.push(newBuilding);
      this.addQueeItems();
    });
  }
}
