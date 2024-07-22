import { Scene } from "phaser";
import Phaser from "phaser";

interface PointType {
  x: number;
  y: number;
  z: number;
}

export class Starfield extends Scene {
  points: PointType[] | undefined;
  stars: Phaser.GameObjects.Group | undefined;
  maxDepth: number | undefined;
  wisp: Phaser.GameObjects.Particles.ParticleEmitter | undefined;
  starSpeed: number = 0.02;
  starSpeedBoost: number = 0.2;
  isBoosting: boolean = false;

  constructor() {
    super("Starfield");
  }
  startBoost() {
    console.log("startBoost");
    this.isBoosting = true;
  }
  stopBoost() {
    console.log("stopBoost");
    this.isBoosting = false;
  }
  create() {
    this.cameras.main.setBackgroundColor(0x000000);

    this.points = [];
    this.stars = this.add.group();
    this.maxDepth = 32;

    for (let i = 0; i < 512; i++) {
      this.points.push({
        x: Phaser.Math.Between(-25, 25),
        y: Phaser.Math.Between(-25, 25),
        z: Phaser.Math.Between(1, this.maxDepth),
      });
    }

    this.wisp = this.add.particles(1024 * 2, 768, "flares", {
      frame: "white",
      color: [0xffffff, 0xffff00],
      colorEase: "quart.out",
      lifespan: 500,
      angle: { min: 40, max: -40 },
      scale: { start: 1, end: 0, ease: "sine.in" },
      speed: { min: 150, max: 450 },
      advance: 500,
      blendMode: "ADD",
    });

    this.input.on("pointerdown", () => this.startBoost(), this);
    this.input.on("pointerup", () => this.stopBoost(), this);

    if (this.input.keyboard) {
      this.input.keyboard.on("keydown", (event: { keyCode: number }) => {
        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.SPACE)
          this.startBoost();
      });
      this.input.keyboard.on("keyup", (event: { keyCode: number }) => {
        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.SPACE)
          this.stopBoost();
      });
    }
  }
  snapToInput() {
    if (this.wisp != undefined) {
      if (this.input.x > 0) {
        this.wisp.x = this.wisp.x + (this.input.x - this.wisp.x) / 25;
        this.wisp.y = this.wisp.y + (this.input.y - this.wisp.y) / 25;
        const x1 = this.wisp.x;
        const y1 = this.wisp.y;
        const x2 = 1024 * 2;
        const y2 = 768;
        const angleRadians = Math.atan2(y1 - y2, x1 - x2);
        this.wisp.rotation = angleRadians;

        const distToCenter = Phaser.Math.Distance.Between(x1, y1, x2, y2);
        if (this.isBoosting) {
          this.wisp.lifespan = (distToCenter / 2 + 200) * 2;
        } else {
          this.wisp.lifespan = distToCenter / 2 + 200;
        }
      } else {
        this.wisp.x = 1024 * 2;
        this.wisp.y = 768;
        this.wisp.rotation = 1.571;
      }
    }
  }
  updateStars() {
    this.stars?.clear(true, true);
    if (this.points !== undefined) {
      for (let i = 0; i < this.points.length; i++) {
        const point = this.points[i];
        if (this.isBoosting) {
          point.z -= this.starSpeedBoost;
        } else {
          point.z -= this.starSpeed;
        }

        if (point.z <= 0) {
          point.x = Phaser.Math.Between(-25, 25);
          point.y = Phaser.Math.Between(-25, 25);
          point.z = this.maxDepth ?? 0;
        }
        const px =
          point.x * (128 / point.z) + Number(this.game.config.width) * 0.5;
        const py =
          point.y * (128 / point.z) + Number(this.game.config.height) * 0.5;
        const circle = new Phaser.Geom.Circle(px, py, (1 - point.z / 32) * 3);
        const graphics = this.add.graphics({
          fillStyle: { color: 0xffffff },
        });
        graphics.setAlpha(1 - point.z / 32);
        graphics.fillCircleShape(circle);
        this.stars?.add(graphics);
      }
    }
  }
  update() {
    this.snapToInput();
    this.updateStars();
  }
}
