import { currentLevel, messageResponse } from ".."
import { Vec2 } from "../position"
import { Panel } from "../ui/panel"
import { UIControl } from "../ui/uiControl"
import { MetaScreen } from "./metascreen"
import { UiAnimationFrame } from "../ui/uiAnimationFrame"
import { animationItems } from "../maps/mapAnimations"
import { PanelContainer } from "../ui/panelContainer"

export class Animations extends MetaScreen {
  private animationsList: Panel = new Panel(new Vec2(2, 2))
  private actionPanel: Panel = new Panel(new Vec2(-1, 38))
  private animationEditor: PanelContainer = new PanelContainer(new Vec2(2, 5))
  private selectedBlockX: i16 = -1
  private selectedBlockY: i16 = -1
  
  constructor() {
    super('EDITOR')
    
    this.uiPanels.push(this.animationsList)

    this.uiPanels.push(this.actionPanel)
    this.actionPanel.addItem(new UIControl(new Vec2(0, 0), "Save", () => {
      messageResponse('save', 'animations.json', '{ "hello": "world" }')
    }))

    
    const animationListItemKeys = animationItems.keys()
    for (let i = 0; i < animationListItemKeys.length; i++) {
      this.animationsList.addItem(new UIControl(new Vec2(0,0), animationListItemKeys[i], tag => {
        if (typeof tag != 'undefined') {
          (currentLevel as Animations).editAnimation(tag)
        }
      }, 'ANIMATION_ITEM_' + animationListItemKeys[i]))
    }

    this.animationEditor.hide()
  }

  public editAnimation(animationName: string): void {
    animationName = animationName.replace('ANIMATION_ITEM_', '')
    
    if (!animationItems.has(animationName)) {
      return
    }
    
    this.animationEditor.empty()
    const animationItem = animationItems.get(animationName)
    const animation = animationItem.getAnimation()
    const colour = animationItem.getColour()
    
    for (let i: u8 = 0; i < animation.getNumberOfFrames(); i++) {
      const frame = animation.getNextFrame(true)
      const ui = new UiAnimationFrame(new Vec2(0,0), frame, i16(i))
      ui.setColour(colour)
      this.animationEditor.addItem(ui)
    }

    this.animationEditor.addLinebreak()
    this.animationEditor.addLinebreak()
    // this.animationEditor.addItem(new UIControl(new Vec2(0,0), 'Done', () => {
    //   ;(currentLevel as Animations).animationEditor.hide()
    //   ;(currentLevel as Animations).animationsList.show()
    // }))
    
    this.animationsList.hide()
    this.animationEditor.show()
  }
 
  public renderLevel(): void {
    this.animationEditor.render(true)
    super.renderLevel()
  }

  public clone(): Animations {
    return new Animations()
  }
}
