export class Building {
  title: string;
  imageSrc: string;
  constructionProgress = 0;
  oncePerSystem: boolean;

  constructor(title: string, imageSrc: string, oncePerSystem: boolean) {
    this.title = title;
    this.imageSrc = imageSrc;
    this.oncePerSystem = oncePerSystem;
  }
}

export const listOfBuildings = [
  new Building("Capitol", "./public/capitol.svg", true),
  new Building("Farm", "./public/farm.svg", false),
  new Building("Factory", "./public/farm.svg", false),
];
