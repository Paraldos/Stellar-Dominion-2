import {
  getRandomArrayElement,
  getRandomNumberFromRange,
} from "../helper/utils";
import Building from "./building";

const POSSIBLE_STAR_COLORS = ["#fff176", "#fff176", "#29b6f6", "#d01716"];

export default class StarData {
  title = "star";
  index: number;
  color: string = getRandomArrayElement(POSSIBLE_STAR_COLORS);
  posX: number;
  posY: number;
  size: number = getRandomNumberFromRange(3, 8);
  buildings: Building[] = [];

  constructor(
    index: number,
    row: number,
    column: number,
    cellSize: {
      x: number;
      y: number;
    }
  ) {
    this.index = index;
    this.posX = column * cellSize.x + cellSize.x / 2;
    this.posX += getRandomNumberFromRange(-cellSize.x / 4, cellSize.x / 4);
    this.posY = row * cellSize.y + cellSize.y / 2;
    this.posY += getRandomNumberFromRange(-cellSize.y / 4, cellSize.y / 4);
  }
}
