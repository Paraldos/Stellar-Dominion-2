import "./modal.css";

export default class Modal {
  modal;
  modalContent;
  modalHeader;
  modalTitle;
  modalCloseBtn;

  constructor(title: string) {
    this.modal = document.createElement("div");
    this.modal.classList = "modal";
    this.modal.addEventListener("click", () => this.modal.remove());
    document.body.appendChild(this.modal);

    this.modalContent = document.createElement("div");
    this.modalContent.classList = "modalContent";
    this.modalContent.addEventListener("click", (event) => {
      event.stopPropagation();
    });
    this.modal.appendChild(this.modalContent);

    this.modalHeader = document.createElement("div");
    this.modalHeader.classList = "modalHeader";
    this.modalContent.appendChild(this.modalHeader);

    this.modalTitle = document.createElement("p");
    this.modalTitle.classList = "modalTitle";
    this.modalTitle.innerText = title;
    this.modalHeader.appendChild(this.modalTitle);

    this.modalCloseBtn = document.createElement("button");
    this.modalCloseBtn.classList = "modalCloseBtn";
    this.modalCloseBtn.addEventListener("click", () => this.modal.remove());
    this.modalHeader.appendChild(this.modalCloseBtn);
  }
}
