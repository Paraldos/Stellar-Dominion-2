import "./navbar.css";
import SaveLoadmodal from "../saveLoadModal/saveLoadModal";
import GameData from "../data/gameData";

export default class Navbar {
  gameData: GameData;
  navbar = document.querySelector(".navbar");
  map;
  saveLoad;

  constructor(gameData: GameData) {
    this.gameData = gameData;
    this.map = this.addBtn("Map");
    this.saveLoad = this.addBtn("Save / Load");
    this.saveLoad.addEventListener(
      "click",
      () => new SaveLoadmodal(this.gameData)
    );
  }

  addBtn(text: string): HTMLElement {
    const li = document.createElement("li");
    li.classList = "btn inverseBtn";
    li.innerHTML = text;
    this.navbar?.appendChild(li);
    return li;
  }
}
