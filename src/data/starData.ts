import { getRandomArrayElement } from "../helper/utils";

const POSSIBLE_STAR_COLORS = ["#fff176", "#fff176", "#29b6f6", "#d01716"];

export default class StarData {
  title = "star";
  field: number;
  row = 0;
  column = 0;
  color: string;

  constructor(index: number, row: number, column: number) {
    this.field = index;
    this.row = row;
    this.column = column;
    this.color = getRandomArrayElement(POSSIBLE_STAR_COLORS);
  }
}
