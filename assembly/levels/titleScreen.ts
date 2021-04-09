import { gameState } from "../index"
import { mapToTiles } from "../map"
import { Vec2 } from "../position"
import { UIControl } from "../ui/uiControl"
import { Level } from "./level"
import { Level1 } from "./one"

export class TitleScreen extends Level {
  constructor() {
    super(0, 0, mapToTiles([
      '__________________________________',
      '|                                |',
      '|                                |',
      '|                                |',
      '|                                |',
      '|                                |',
      '|                                |',
      '__________________________________'
    ]), true)

    this.uiControls.push(new UIControl(new Vec2(-1, -1), "Start", () => {
      gameState.loadLevel(new Level1())
    }))
  }
}
