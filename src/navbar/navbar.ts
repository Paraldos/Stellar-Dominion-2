import "./navbar.css";

export default class Navbar {
  navbar = document.querySelector(".navbar");

  constructor() {
    this.addBtn("Map");
    this.addBtn("Research");
    this.addBtn("News");
  }

  addBtn(title: string) {
    const li = document.createElement("li");
    li.innerHTML = title;
    li.addEventListener("click", () => this.onClickLi(title));
    document.addEventListener("openPage", (event) =>
      this.onOpenPage(event as CustomEvent, li)
    );
    this.navbar?.appendChild(li);
  }

  onClickLi(title: string) {
    document.dispatchEvent(
      new CustomEvent("openPage", {
        detail: { window: title },
      })
    );
  }

  onOpenPage(event: CustomEvent, li: HTMLElement) {
    li.classList.toggle("active", event.detail.window === li.innerHTML);
  }
}
