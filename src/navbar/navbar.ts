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
    li.addEventListener("click", () => {
      document.dispatchEvent(new CustomEvent("open" + title));
    });
    this.navbar?.appendChild(li);
  }
}
