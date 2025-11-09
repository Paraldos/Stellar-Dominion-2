export default class Research {
  content = document.querySelector(".content");
  pages = document.querySelectorAll(".page");

  constructor() {
    document.addEventListener("openResearch", () => this.onOpenResearch());
  }

  onOpenResearch() {
    this.pages.forEach((el) => el.classList.remove("visible"));
  }
}
