import Modal from "../modal/modal";
import "./starModal.css";
import StarData from "../data/starData";
import ConstructionArea from "./ConstructionArea";
import { Building } from "../data/building";

export default class StarModal extends Modal {
  starData: StarData;

  constructor(starData: StarData) {
    super("Star");
    this.starData = starData;
    this.addSoladSystemImage();
    this.addStarInformation();
    this.addDistricts();
    new ConstructionArea(this.modalContent, starData);
    document.addEventListener("nextRound", () => {
      console.log("bert");
    });
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

  addDistricts(): void {
    const div = document.createElement("div");
    div.classList = "starModal__districts";
    this.modalContent.appendChild(div);

    this.starData.buildings.forEach((building, index) => {
      if (building.constructionProgress < 100) return;
      this.addDistrict(building, index, div);
    });
  }

  addDistrict(building: Building, index: number, container: HTMLElement) {
    // content
    const btn = document.createElement("button");
    btn.classList = "starModal__district";
    btn.innerHTML = `
	<img src="${building.imageSrc}" alt="${building.title}" />
	<span>Progress: ${building.constructionProgress}</span>
    <img class="starModal__xImage" src="/public/x.svg" alt="${building.title}" />`;
    container.appendChild(btn);
    // logic
  }
}
