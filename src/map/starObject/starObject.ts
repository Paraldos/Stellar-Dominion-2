import type { KAPLAYCtx } from "kaplay";
import StarData from "../../data/starData";

export default class StarObject {
  constructor(
    starData: StarData,
    k: KAPLAYCtx,
    fieldSize: { x: number; y: number }
  ) {
    const posX = starData.column * fieldSize.x + fieldSize.x / 2;
    const posY = starData.row * fieldSize.y + fieldSize.y / 2;
    const star = k.add([
      k.sprite("star"),
      k.pos(posX, posY),
      k.color("#d9ffe2"),
      k.anchor("center"),
      k.area(),
    ]);
    star.onClick(() => {
      k.debug.log("click");
    });
    star.onHover(() => {
      star.color = k.rgb(0, 0, 255);
    });
    star.onHoverEnd(() => {
      star.color = k.rgb();
    });
  }
}
