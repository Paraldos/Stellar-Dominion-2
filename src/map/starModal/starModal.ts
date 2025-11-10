import Modal from "../../modal/modal";
import "./starModal.css";

export default class StarModal extends Modal {
  solarSystem;

  constructor() {
    super("Star");

    this.solarSystem = document.createElement("img");
    this.solarSystem.classList.add("starModal__solarSystem");
    this.solarSystem.src = "public/solarSystem.png";
    this.modalContent.appendChild(this.solarSystem);
  }
}
