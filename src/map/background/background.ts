import type { KAPLAYCtx } from "kaplay";

export default class Background {
  constructor(k: KAPLAYCtx) {
    // const game = document.querySelector(".game");
    // const background = document.createElement("img");
    // background.classList = "background";
    // background.src = "./background.png";
    // game?.appendChild(background);

    k.loadSprite("background", "/background.png");
    k.add([k.sprite("background"), k.anchor("center")]);
  }
}
