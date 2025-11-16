import "./saveLoadModal.css";
import Modal from "../modal/modal";
import GameData from "../data/gameData";
import { saveGame, loadGame } from "../main";

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
    this.addSlotStatus(slot, index);
    this.addBtns(slot, index);
  }

  addSlotStatus(slot: HTMLElement, index: number) {
    const slotStatus = document.createElement("div");
    slotStatus.classList = "saveLoadModal__slotStatus";
    slot.appendChild(slotStatus);

    const slotTitle = document.createElement("p");
    slotTitle.classList = "saveLoadModal__slotTitle";
    slotTitle.innerHTML = "Slot " + index;
    slotStatus.appendChild(slotTitle);

    const slotDescription = document.createElement("p");
    slotDescription.classList = "saveLoadModal__slotDescription";
    slotStatus.appendChild(slotDescription);
    const allSaves = JSON.parse(
      localStorage.getItem("stellarDominion2") || "{}"
    );
    const save = allSaves[index];
    if (save == undefined) slotDescription.innerHTML += "-empty-";
    else slotDescription.innerHTML += "WIP";
  }

  addBtns(slot: HTMLElement, index: number) {
    const btns = document.createElement("div");
    btns.classList = "saveLoadModal__btns";
    slot.appendChild(btns);

    const saveBtn = document.createElement("button");
    saveBtn.innerHTML = "<span>Save</span>";
    saveBtn.addEventListener("click", () => saveGame(index));
    btns.appendChild(saveBtn);

    const loadBtn = document.createElement("button");
    loadBtn.innerHTML = "<span>Load</span>";
    loadBtn.addEventListener("click", () => loadGame(index));
    btns.appendChild(loadBtn);
  }
}
