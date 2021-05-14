import { loadLevel, LEVEL_DIFFICULTY_CODES, keyPressListener, gameState, resetText, currentLevel } from "../index"
import { Vec2 } from "../position"
import { Panel } from "../ui/panel"
import { UIControl } from "../ui/uiControl"
import { UILabel } from "../ui/uiLabel"
import { BaseLevel } from "./baseLevel"
import { MetaScreen } from "./metascreen"
import { TitleScreen } from "./titleScreen"

export class LevelCodeEntry extends MetaScreen {
  private actionPanel: Panel = new Panel(new Vec2(-1, -1))
  constructor() {
    super('LEVEL_CODE_ENTRY')
    
    keyPressListener(true)
    resetText()

    this.uiLabels.push(new UILabel(new Vec2(-1, 15), '', 'LEVEL_CODE_MESSAGE'))
    this.uiLabels.push(new UILabel(new Vec2(-1, 20), '', 'LEVEL_CODE'))
    this.uiPanels.push(this.actionPanel)
    
    this.actionPanel.items.push(new UIControl(new Vec2(0, 0), "Back", () => {
      doBeforeLeaving()
      const level = new TitleScreen()
      loadLevel(level)
    }))

    this.actionPanel.items.push(new UIControl(new Vec2(0, 0), "Clear", () => {
      resetText()
      updateLabel('LEVEL_CODE_MESSAGE', '')
    }))

    this.actionPanel.items.push(new UIControl(new Vec2(0, 0), "Go", () => {
      const levelCode = gameState.userEnteredText
      let level: BaseLevel | null = null

      const levelCodes = LEVEL_DIFFICULTY_CODES.values()
      for (let i = 0; i < levelCodes.length; i++) {
        if (levelCodes[i].has(levelCode)) {
          const levelFactory = levelCodes[i].get(levelCode)
          level = levelFactory()
          break
        }
      }

      if (level != null) {
        doBeforeLeaving()
        loadLevel(level)
      } else {
        updateLabel('LEVEL_CODE_MESSAGE', 'The code is incorrect')
      }
    }))
  }

  public clone(): LevelCodeEntry {
    return new LevelCodeEntry()
  }

  public renderLevel(): void {
    const label = this.getUIByTag('LEVEL_CODE')
    if (label != null) {
      label.updateText(gameState.userEnteredText)
      label.setPosition(new Vec2(-1, label.getPosition().y)) // force centre of label to be recalculated
    }
    super.renderLevel()
  }
}

const doBeforeLeaving = (): void => {
  keyPressListener(false)
  resetText()
}

const updateLabel = (tag: string, text: string): void => {
  const level = currentLevel
  level.updateLabel(tag, text)
}