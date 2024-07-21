import { useEffect, useState } from "react";
import Phaser from "phaser";
import { Starfield } from "./Starfield";
import config from "../service/config";
import { Preloader } from "./Preloader";

const PhaserRoot = () => {
  const [, setPhaser] = useState<Phaser.Game>();

  useEffect(() => {
    const _phaser = new Phaser.Game({
      type: Phaser.AUTO,
      scale: {
        mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: "phaser-parent",
        width: 1024*4,
        height: 768*2,
      },
      backgroundColor: "#ffd13b",
      scene: [Preloader, Starfield],
    });
    setPhaser(_phaser);
  }, []);

  return <div id={config.phaser_div_id}></div>;
};

export default PhaserRoot;
