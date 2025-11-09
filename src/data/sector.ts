import Star from "./star.ts";

export default class Sector {
  rows = 5;
  columns = 5;
  fields = this.rows * this.columns;
  stars: Star[];

  constructor() {
    this.stars = [];
    for (let i = 0; i < this.fields; i++) {
      this.stars.push(new Star(i));
    }
    console.log(this.stars);
  }
}
