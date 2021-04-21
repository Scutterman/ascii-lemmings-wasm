import { loadLevel } from "../index"
import { Vec2 } from "../position"
import { UIControl } from "../ui/uiControl"
import { MetaScreen } from "./metascreen"
import { Level1 } from "./one"

export class TitleScreen extends MetaScreen {
  constructor() {
    super('TITLE')

    this.uiControls.push(new UIControl(new Vec2(-1, -1), "Start", () => {
      loadLevel(new Level1())
    }))
  }

  public clone(): TitleScreen {
    return new TitleScreen()
  }
}
