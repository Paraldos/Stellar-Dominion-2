import "./navbar.css";
import SaveLoadmodal from "../saveLoadModal/saveLoadModal";

export default class Navbar {
  navbar = document.querySelector(".navbar");
  map;
  saveLoad;

  constructor() {
    this.map = this.addBtn("Map");
    this.saveLoad = this.addBtn("Save / Load");
    this.saveLoad.addEventListener("click", () => new SaveLoadmodal());
  }

  addBtn(text: string): HTMLElement {
    const li = document.createElement("li");
    li.innerHTML = text;
    this.navbar?.appendChild(li);
    return li;
  }
}
