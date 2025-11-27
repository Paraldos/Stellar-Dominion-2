import "./navbar.css";
import SaveLoadmodal from "../saveLoadModal/saveLoadModal";
import GameData from "../data/gameData";

export default class Navbar {
  gameData: GameData;
  navbar = document.querySelector(".navbar");
  map;
  saveLoad;
  nextRound;

  constructor(gameData: GameData) {
    this.gameData = gameData;
    this.map = this.addBtn("Map");
    this.saveLoad = this.addBtn("Save / Load");
    this.nextRound = this.addBtn("Next Round");
    this.saveLoad.addEventListener(
      "click",
      () => new SaveLoadmodal(this.gameData)
    );
    this.nextRound.addEventListener("click", () => {
      document.dispatchEvent(new CustomEvent("nextRound"));
    });
  }

  addBtn(text: string): HTMLElement {
    const li = document.createElement("li");
    li.classList = "btn inverseBtn";
    li.innerHTML = `<span>${text}</span>`;
    this.navbar?.appendChild(li);
    return li;
  }
}
