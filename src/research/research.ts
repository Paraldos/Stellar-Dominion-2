export default class Research {
  content = document.querySelector(".content");
  research = document.querySelector(".research");

  constructor() {
    document.addEventListener("openPage", (event) =>
      this.onOpenResearch(event as CustomEvent)
    );
  }

  onOpenResearch(event: CustomEvent) {
    this.research?.classList.toggle(
      "visible",
      event.detail.window === "Research"
    );
  }
}
