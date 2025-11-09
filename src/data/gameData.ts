import StarData from "./starData";
import { shuffleArray } from "../helper/utils.ts";

export default class GameData {
  mapSize = { x: 600, y: 400 };
  cellSize = { x: 0, y: 0 };
  rows = 8;
  columns = 8;
  cells = this.rows * this.columns;
  amountOfStars = Math.ceil(this.cells / 4);
  stars: StarData[] = [];

  constructor() {
    this.getStars();
    this.cellSize = {
      x: this.mapSize.x / this.rows,
      y: this.mapSize.y / this.columns,
    };
  }

  getStars() {
    const prep = shuffleArray([
      ...Array(this.amountOfStars).fill(1),
      ...Array(this.cells - this.amountOfStars).fill(0),
    ]);
    prep.forEach((el, i) => {
      if (el == 0) return;
      const row = Math.floor(i / this.columns);
      const column = i % this.columns;
      this.stars.push(new StarData(i, row, column));
    });
  }
}
