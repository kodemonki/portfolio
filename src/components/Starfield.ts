import { Scene } from "phaser";
import Phaser from "phaser";


interface PointType{
    x:number,
    y:number,
    z:number
}

export class Starfield extends Scene {
    points: PointType[] | undefined;
    stars: Phaser.GameObjects.Group | undefined;
    maxDepth: number | undefined;

    constructor() {
        super("Starfield");
    }
    create() {
        this.cameras.main.setBackgroundColor(0x000000);       

        this.points= [];
        this.stars = this.add.group();
        this.maxDepth = 32;

        for (let i = 0; i < 512; i++) {
            this.points.push({
                x: Phaser.Math.Between(-25, 25),
                y: Phaser.Math.Between(-25, 25),
                z: Phaser.Math.Between(1, this.maxDepth),
            });
        }


    }
    update() {
        this.stars?.clear(true, true);
        if(this.points !== undefined){
            for (let i = 0; i < this.points.length; i++) {
                const point = this.points[i];

                point.z -= 0.02;

                if (point.z <= 0) {
                    point.x = Phaser.Math.Between(-25, 25);
                    point.y = Phaser.Math.Between(-25, 25);
                    point.z = this.maxDepth ?? 0;
                }

                const px = point.x * (128 / point.z) + Number(this.game.config.width) * 0.5;
                const py = point.y * (128 / point.z) + Number(this.game.config.height) * 0.5;

                const circle = new Phaser.Geom.Circle(px, py, (1 - point.z / 32) * 2);

                const graphics = this.add.graphics({
                    fillStyle: { color: 0xffffff },
                });
                graphics.setAlpha(1 - point.z / 32);
                graphics.fillCircleShape(circle);
                this.stars?.add(graphics);
            }
        }
}

}
