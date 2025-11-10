import type { KAPLAYCtx, GameObj } from "kaplay";
import StarData from "../../data/starData";
import StarModal from "../starModal/starModal";

export default class StarObject {
  starData: StarData;
  k: KAPLAYCtx;
  fieldSize: { x: number; y: number };
  star: GameObj;
  starBorder: GameObj;

  constructor(
    starData: StarData,
    k: KAPLAYCtx,
    fieldSize: { x: number; y: number }
  ) {
    this.starData = starData;
    this.k = k;
    this.fieldSize = fieldSize;
    this.star = this.setupStar();
    this.starBorder = this.setupStarBorder();
    this.star.onClick(() => this.onClick());
    this.star.onHover(() => this.onHover());
    this.star.onHoverEnd(() => this.onHoverEnd());
  }

  setupStar(): GameObj {
    this.k.loadSprite("star", "/public/star.png");
    return this.k.add([
      this.k.sprite("star"),
      this.k.pos(this.starData.posX, this.starData.posY),
      this.k.color(this.starData.color),
      this.k.anchor("center"),
      this.k.area(),
    ]);
  }

  setupStarBorder(): GameObj {
    this.k.loadSprite("starBorder", "/public/starBorder.png");
    return this.star.add([
      this.k.sprite("starBorder"),
      this.k.anchor("center"),
      this.k.opacity(0),
    ]);
  }

  onClick() {
    new StarModal(this.starData);
  }

  onHover() {
    this.starBorder.opacity = 1;
  }

  onHoverEnd() {
    this.starBorder.opacity = 0;
  }
}
