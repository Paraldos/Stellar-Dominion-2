import "./saveLoadModal.css";
import Modal from "../modal/modal";
import GameData from "../data/gameData";

export default class SaveLoadmodal extends Modal {
  slotsContainer: HTMLElement;
  gameData: GameData;

  constructor(gameData: GameData) {
    super("Save / Load");
    this.gameData = gameData;
    this.slotsContainer = this.addSlotsContainer();
  }

  addSlotsContainer(): HTMLElement {
    const ul = document.createElement("ul");
    ul.classList = "saveLoadModal__slotsContainer";
    this.modalContent.appendChild(ul);
    for (let i = 0; i < 5; i++) {
      this.addSlot(i + 1, ul);
    }
    return ul;
  }

  addSlot(index: number, container: HTMLElement) {
    const slot = document.createElement("li");
    slot.classList = "saveLoadModal__slot";
    container.appendChild(slot);

    const slotTitle = document.createElement("p");
    slotTitle.innerHTML = "Slot " + index;
    slot.appendChild(slotTitle);

    const saveBtn = document.createElement("button");
    saveBtn.innerHTML = "Save";
    saveBtn.addEventListener("click", () => {
      console.log("click Save");
    });
    slot.appendChild(saveBtn);

    const loadBtn = document.createElement("button");
    loadBtn.innerHTML = "Load";
    loadBtn.addEventListener("click", () => {
      console.log("click Load");
    });
    slot.appendChild(loadBtn);
  }
}
