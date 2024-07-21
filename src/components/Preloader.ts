import { Scene } from "phaser";

export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }
  preload() {
    this.load.image("static", "images/static.png");
    this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
  }
  create() {
    this.scene.start("Starfield");
  }
}
