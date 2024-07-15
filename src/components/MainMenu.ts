import { Scene, GameObjects } from "phaser";


export class MainMenu extends Scene {
  title: GameObjects.Text | undefined;

  constructor() {
    super("MainMenu");
  }

  create() {

    this.title = this.add
      .text(512, 234, "Dragon Souls", {
        fontFamily: "Arial Black",
        fontSize: 44,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 8,
        align: "center",
      })
      .setOrigin(0.5);   
  }
}
