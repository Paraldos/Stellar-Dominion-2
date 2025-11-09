import "./modal.css";

export default class Modal {
  modal;
  modalContent;

  constructor() {
    this.modal = document.createElement("div");
    this.modal.classList = "modal";
    document.body.appendChild(this.modal);

    this.modalContent = document.createElement("div");
    this.modalContent.classList = "modalContent";
    this.modal.appendChild(this.modalContent);
  }
}
