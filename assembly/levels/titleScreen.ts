import { loadLevel } from "../index"
import { mapToTiles } from "../map"
import { Vec2 } from "../position"
import { UIControl } from "../ui/uiControl"
import { Level } from "./level"
import { Level1 } from "./one"

export class TitleScreen extends Level {
  constructor() {
    super('TITLE', 0, 0, mapToTiles([
      '__________________________________________________________________________',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '__________________________________________________________________________',

    ]), true)

    this.uiControls.push(new UIControl(new Vec2(32, 18), "Start", () => {
      loadLevel(new Level1())
    }))
  }

  public clone(): TitleScreen {
    return new TitleScreen()
  }
}
