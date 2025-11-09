import type { KAPLAYCtx } from "kaplay";

export default class Background {
  constructor(k: KAPLAYCtx) {
    k.loadSprite("background", "/background.png");
    k.add([
      k.sprite("background"),
      k.pos(k.width() / 2, k.height() / 2),
      k.anchor("center"),
    ]);
  }
}
