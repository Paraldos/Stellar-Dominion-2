export default class StarData {
  title = "star";
  field: number;
  row = 0;
  column = 0;

  constructor(index: number, row: number, column: number) {
    this.field = index;
    this.row = row;
    this.column = column;
  }
}
