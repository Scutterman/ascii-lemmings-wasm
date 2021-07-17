import { loadLevel, Difficulty, LEVEL_DIFFICULTY_CODES } from "../index"
import { Vec2 } from "../position"
import { Panel } from "../ui/panel"
import { UIControl } from "../ui/uiControl"
import { LevelCodeEntry } from "./levelCodeEntry"
import { MetaScreen } from "./metascreen"
import { Level_fun_1_CAJJLDLBCS } from '../generatedLevels/fun_1_CAJJLDLBCS'

export class TitleScreen extends MetaScreen {
  private actionPanel: Panel = new Panel(new Vec2(-1, -1))
  constructor() {
    super('TITLE')

    this.uiPanels.push(this.actionPanel)
    this.actionPanel.addItem(new UIControl(new Vec2(0, 0), "Start", () => {
      // const levelFactory = LEVEL_DIFFICULTY_CODES.get(Difficulty.Fun).get('CAJJLDLBCS')
      // const level = levelFactory()
      const level = new Level_fun_1_CAJJLDLBCS()
      loadLevel(level)
    }))

    this.actionPanel.addItem(new UIControl(new Vec2(0, 0), "Code", () => {
      const level = new LevelCodeEntry()
      loadLevel(level)
    }))
  }
  
  public clone(): TitleScreen {
    return new TitleScreen()
  }
}
