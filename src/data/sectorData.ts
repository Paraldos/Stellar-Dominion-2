import StarData from "./starData.ts";
import { shuffleArray } from "../helper/utils.ts";

export default class Sector {
  rows = 8;
  columns = 8;
  fields = this.rows * this.columns;
  amountOfStars = Math.ceil(this.fields / 4);
  stars: StarData[] = [];

  constructor() {
    this.getStars();
  }

  getStars() {
    const prep = shuffleArray([
      ...Array(this.amountOfStars).fill(1),
      ...Array(this.fields - this.amountOfStars).fill(0),
    ]);
    prep.forEach((el, i) => {
      if (el == 0) return;
      const row = Math.floor(i / this.columns);
      const column = i % this.columns;
      this.stars.push(new StarData(i, row, column));
    });
  }
}
