import { loadLevel, Difficulty, LEVEL_DIFFICULTY_CODES } from "../index"
import { Vec2 } from "../position"
import { UIControl } from "../ui/uiControl"
import { MetaScreen } from "./metascreen"

export class TitleScreen extends MetaScreen {
  constructor() {
    super('TITLE')
    this.uiControls.push(new UIControl(new Vec2(-1, -1), "Start", () => {
      const levelFactory = LEVEL_DIFFICULTY_CODES.get(Difficulty.Fun).get('CAJJLDLBCS')
      const level = levelFactory()
      loadLevel(level)
    }))
  }
  
  public clone(): TitleScreen {
    return new TitleScreen()
  }
}
