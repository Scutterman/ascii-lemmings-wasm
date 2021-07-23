import { loadLevel } from "../index"
import { Vec2 } from "../position"
import { Panel } from "../ui/panel"
import { UIControl } from "../ui/uiControl"
import { LevelCodeEntry } from "./levelCodeEntry"
import { MetaScreen } from "./metascreen"
import { getAvailableLevels } from '../generatedLevels/available'
import { getLevelByCode } from "../generatedLevels/select"

export class TitleScreen extends MetaScreen {
  private actionPanel: Panel = new Panel(new Vec2(-1, -1))
  constructor() {
    super('TITLE')

    this.uiPanels.push(this.actionPanel)
    
    this.actionPanel.addItem(new UIControl(new Vec2(0, 0), "Fun", () => {
      loadFirstLevel('fun')
    }))

    this.actionPanel.addItem(new UIControl(new Vec2(0, 0), "Tricky X", () => {
      loadFirstLevel('tricky')
    }))

    this.actionPanel.addLinebreak()

    this.actionPanel.addItem(new UIControl(new Vec2(0, 0), "Taxing X", () => {
      loadFirstLevel('taxing')
    }))

    this.actionPanel.addItem(new UIControl(new Vec2(0, 0), "Mayhem X", () => {
      loadFirstLevel('mayhem')
    }))

    this.actionPanel.addLinebreak()

    this.actionPanel.addItem(new UIControl(new Vec2(0, 0), "Code", () => {
      const level = new LevelCodeEntry()
      loadLevel(level)
    }))
  }
  
  public clone(): TitleScreen {
    return new TitleScreen()
  }
}

const loadFirstLevel = (difficulty: string): boolean => {
  const levels = getAvailableLevels(difficulty)
  if (levels != null && levels.length > 0) {
    const levelDetail = levels[0]
    const level = getLevelByCode(levelDetail.code)
    if (level != null) {
      loadLevel(level)
      return true
    }
  }

  return false
}