import { Building, listOfBuildings } from "../data/building";
import StarData from "../data/starData";

export default class ConstructionArea {
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
    this.addQueueItems();
    listOfBuildings.forEach((building) => this.addOption(building));
  }

  addQueueItems() {
    if (this.queue == null) return;
    this.queue.innerHTML = "<p>Construction Queue:</p>";
    this.starData.buildings.forEach((building, index) => {
      if (building.constructionProgress >= 100) return;
      this.addQueueItem(building, index);
    });
  }

  addQueueItem(building: Building, index: number) {
    // guard
    if (this.queue == null) return;
    // content
    const btn = document.createElement("button");
    btn.classList = "starModal__queueItem";
    btn.innerHTML = `
	<img src="${building.imageSrc}" alt="${building.title}" />
	<span>Progress: ${building.constructionProgress}</span>
    <img class="starModal__xImage" src="/public/x.svg" alt="${building.title}" />`;
    this.queue.appendChild(btn);
    // logic
    btn.addEventListener("click", () => {
      this.starData.buildings.splice(index, 1);
      document.dispatchEvent(new CustomEvent("updateConstructionOptions"));
      this.addQueueItems();
    });
  }

  getBuildingsInQueue() {
    let count = 0;
    for (const b of this.starData.buildings) {
      if (b.constructionProgress < 100) count++;
    }
    return count;
  }

  addOption(building: Building) {
    // guard
    if (this.options == null) return;
    if (this.queue == null) return;
    // content
    const btn = document.createElement("button");
    btn.classList = "starModal__constructionOption";
    btn.innerHTML = `
	<img src="${building.imageSrc}" alt="${building.title}" />
    <img class="starModal__upImage" src="/public/chevronUp.svg" alt="${building.title}" />
	`;
    this.options.appendChild(btn);
    this.updateOption(btn);
    // logic
    btn.addEventListener("click", () => {
      const newBuilding = structuredClone(building);
      this.starData.buildings.push(newBuilding);
      this.addQueueItems();
      document.dispatchEvent(new CustomEvent("updateConstructionOptions"));
    });
    document.addEventListener("updateConstructionOptions", () =>
      this.updateOption(btn)
    );
  }

  updateOption(option: HTMLButtonElement) {
    option.disabled = this.getBuildingsInQueue() >= 3;
  }
}
