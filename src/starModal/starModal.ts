import Modal from "../modal/modal";
import "./starModal.css";
import StarData from "../data/starData";

export default class StarModal extends Modal {
  starData: StarData;
  solarSystemImage;
  starInformation;

  constructor(starData: StarData) {
    super("Star");
    this.starData = starData;
    this.solarSystemImage = this.initSolarSystemImage();
    this.starInformation = this.initStarInformation();
  }

  initSolarSystemImage(): HTMLElement {
    const img = document.createElement("img");
    img.classList = "starModal__solarSystem";
    img.src = "public/solarSystem.png";
    this.modalContent.appendChild(img);
    return img;
  }

  initStarInformation(): HTMLElement {
    const div = document.createElement("div");
    div.classList = "starModal__starInformation";
    div.innerHTML = `
		<p>Star Title</p>
	`;
    this.modalContent.appendChild(div);
    return div;
  }
}
