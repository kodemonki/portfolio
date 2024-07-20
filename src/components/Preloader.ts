import { Scene } from "phaser";

export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }
  preload() {
    this.load.image("static", "images/static.png");
  }
  create() {
    this.scene.start("Starfield");
  }
}
