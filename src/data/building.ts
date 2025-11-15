export class Building {
  title: string;
  imageSrc: string;

  constructor(title: string, imageSrc: string) {
    this.title = title;
    this.imageSrc = imageSrc;
  }
}

export const listOfBuildings = [new Building("Farm", "./public/farm.svg")];
