import { loadLevel, keyPressListener, gameState, resetText, currentLevel } from "../index"
import { Vec2 } from "../position"
import { Panel } from "../ui/panel"
import { UIControl } from "../ui/uiControl"
import { UILabel } from "../ui/uiLabel"
import { MetaScreen } from "./metascreen"
import { TitleScreen } from "./titleScreen"
import { isEditingMap } from '../imports'
import { Editor } from "./editor"
import { Animations } from "./animations"
import { getLevelByCode } from '../generatedLevels/select'
import { LabelledTextbox } from "../ui/labelledButton"

export class LevelCodeEntry extends MetaScreen {
  private actionPanel: Panel = new Panel(new Vec2(-1, -1))
  constructor() {
    super('LEVEL_CODE_ENTRY')
    
    keyPressListener(true)
    resetText()

    this.uiLabels.push(new UILabel(new Vec2(-1, 15), '', 'LEVEL_CODE_MESSAGE'))
    const entry = new LabelledTextbox(new Vec2(-1, 19), 'Enter Code', 'LEVEL_CODE')
    this.uiLabels.push(entry)
    gameState.focusedUiControl = entry
    this.uiPanels.push(this.actionPanel)
    
    this.actionPanel.addItem(new UIControl(new Vec2(0, 0), "Back", () => {
      doBeforeLeaving()
      const level = new TitleScreen()
      loadLevel(level)
    }))

    this.actionPanel.addItem(new UIControl(new Vec2(0, 0), "Clear", () => {
      resetText()
      updateLabel('LEVEL_CODE_MESSAGE', '')
    }))

    this.actionPanel.addItem(new UIControl(new Vec2(0, 0), "Go", () => {
      const label = (currentLevel as LevelCodeEntry).getUIByTag('LEVEL_CODE')
      if (label == null) { return }
      let levelCode = label.getText().toUpperCase()
      
      if (levelCode == 'EDIT:') {
        // TODO:: when exiting the edit screen this needs to be reset
        isEditingMap(1)
        doBeforeLeaving()
        const level = new Editor()
        loadLevel(level)
        return
      } else if (levelCode == 'ANIM:') {
        doBeforeLeaving()
        const level = new Animations()
        loadLevel(level)
        return
      } else {
        const level = getLevelByCode(levelCode)
        if (level != null) {
          doBeforeLeaving()
          loadLevel(level)
        } else {
          updateLabel('LEVEL_CODE_MESSAGE', 'The code is incorrect')
        }
      }
    }))
  }

  public clone(): LevelCodeEntry {
    return new LevelCodeEntry()
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
