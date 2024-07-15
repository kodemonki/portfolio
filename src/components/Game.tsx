import { useEffect, useState } from "react";
import Phaser from "phaser";
import { MainMenu } from "./MainMenu";

const PhaserRoot = () => {
  // Component centralized reference to the phaser instance if needed.
  const [, setPhaser] = useState<Phaser.Game>();

  // Create a new Phaser.Game instance after the initial render.
  useEffect(() => {
    const _phaser = new Phaser.Game({
      type: Phaser.AUTO,
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: "phaser-parent",
        width: 1920,
        height: 1080,
      },
      backgroundColor: "#ffd13b",
      scene: [MainMenu],
    });
    setPhaser(_phaser);
  }, []);

  return <div id="phaser-parent"></div>;
};

export default PhaserRoot;
