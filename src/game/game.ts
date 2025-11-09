export default class Game {
  amountOfStars = 20;
  stars: Star[];

  constructor() {
    this.stars = [];
    for (let i = 0; i < this.amountOfStars; i++) {
      this.stars.push(new Star());
    }
    console.log(this.stars);
  }
}

class Star {
  title = "star";
  index = 0;

  constructor() {}
}
