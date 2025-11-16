export class Building {
  title: string;
  imageSrc: string;
  constructionProgress = 0;

  constructor(title: string, imageSrc: string) {
    this.title = title;
    this.imageSrc = imageSrc;
  }
}

export const listOfBuildings = [
  new Building("Capitol", "./public/capitol.svg"),
  new Building("Farm", "./public/farm.svg"),
];
