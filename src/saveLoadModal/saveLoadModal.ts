import "./saveLoadModal.css";
import Modal from "../modal/modal";

export default class SaveLoadmodal extends Modal {
  slotsContainer: HTMLElement;

  constructor() {
    super("Save / Load");
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
    slot.innerHTML = `
		<p>Slot ${index}</p>
		<button>Save</button>
		<button>Load</button>
	`;
    container.appendChild(slot);
  }
}
