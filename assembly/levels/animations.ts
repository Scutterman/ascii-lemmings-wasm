import { currentLevel, gameState, keyPressListener, messageResponse, resetText } from ".."
import { Vec2 } from "../position"
import { Panel } from "../ui/panel"
import { UIControl } from "../ui/uiControl"
import { MetaScreen } from "./metascreen"
import { getLastFrame, reset, UiAnimationFrame } from "../ui/uiAnimationFrame"
import { animationItems } from "../maps/mapAnimations"
import { PanelContainer } from "../ui/panelContainer"
import { SingleCharacterAnimation } from "../maps/types"
import { UILabel } from "../ui/uiLabel"

export class Animations extends MetaScreen {
  private animationsList: Panel = new Panel(new Vec2(2, 2))
  private subActionPanel: Panel = new Panel(new Vec2(-1, 38))
  private actionPanel: Panel = new Panel(new Vec2(-1, 40))
  private animationEditor: PanelContainer = new PanelContainer(new Vec2(2, 5))
  private displayedAnimation: string | null = null

  private newNameLabel: UILabel = new UILabel(new Vec2(-1, -1), '', 'NEW_NAME')
  private newNameCreateButton: UIControl
  private newNamePanel: Panel = new Panel(new Vec2(-1,-1))
  private newButton: UIControl
  
  constructor() {
    super('ANIMATION_EDITOR')

    // TODO:: Reset these before leaving
    keyPressListener(true)
    resetText()
    
    this.newNameCreateButton = new UIControl(new Vec2(-1, -1), 'Create', () => {
      (currentLevel as Animations).addAnimationByName()
    })
    
    this.uiPanels.push(this.animationsList)

    this.subActionPanel.hide()
    
    this.subActionPanel.addItem(new UIControl(new Vec2(0,0), 'Add', () => {
      (currentLevel as Animations).addAnimationFrame()
    }))

    this.subActionPanel.addItem(new UIControl(new Vec2(0,0), 'Done', () => {
      (currentLevel as Animations).closeAnimationWindow()
    }))
    
    this.uiPanels.push(this.subActionPanel)
    
    this.uiPanels.push(this.actionPanel)
    this.newButton = new UIControl(new Vec2(0, 0), "New", () => {
      (currentLevel as Animations).addAnimation()
    })
    this.actionPanel.addItem(this.newButton)
    this.actionPanel.addItem(new UIControl(new Vec2(0, 0), "Save", () => {
      messageResponse('save', 'animations.json', '{ "hello": "world" }')
    }))

    const animationListItemKeys = animationItems.keys()
    for (let i = 0; i < animationListItemKeys.length; i++) {
      this.addToAnimationList(animationListItemKeys[i])
    }

    this.uiPanels.push(this.newNamePanel)
    this.newNamePanel.hide()
    this.newNamePanel.setBackgroundColour('#ffffff')
    this.newNamePanel.addItem(this.newNameLabel)
    this.newNamePanel.addLinebreak()
    this.newNamePanel.addItem(this.newNameCreateButton)
    this.newNamePanel.addItem(new UIControl(new Vec2(-1, -1), 'Cancel', () => {
      (currentLevel as Animations).newNamePanel.hide()
    }))

    reset()
    this.animationEditor.hide()
    this.uiPanelContainers.push(this.animationEditor)
  }

  private addToAnimationList(animationName: string): void {
    this.animationsList.addItem(new UIControl(new Vec2(0,0), animationName, tag => {
      if (typeof tag != 'undefined') {
        (currentLevel as Animations).editAnimation(tag)
      }
    }, 'ANIMATION_ITEM_' + animationName))
  }

  private addAnimation(): void {
    resetText()
    this.newNameCreateButton.setBackgroundColour('#ffffff00')
    this.newNameLabel.updateText('')
    this.newNamePanel.show()
  }
  
  private addAnimationByName(): void {
    const animationName = this.newNameLabel.getText()
    if (animationName.length == 0 || animationItems.has(animationName)) {
      this.newNameCreateButton.setBackgroundColour('#cf4a4a')
      return
    }

    animationItems.set(animationName, new SingleCharacterAnimation(' ', '#000000'))
    this.addToAnimationList(animationName)
    this.newNamePanel.hide()
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
    
    const numberOfFrames = animation.getNumberOfFrames()
    for (let i: u8 = 0; i < numberOfFrames; i++) {
      const frame = animation.getNextFrame(true)
      const ui = new UiAnimationFrame(new Vec2(0,0), frame, i16(i))
      ui.setColour(colour)
      this.animationEditor.addItem(ui)
    }

    this.displayedAnimation = animationName
    
    this.animationsList.hide()
    this.animationEditor.show()
    this.subActionPanel.show()
  }

  private addAnimationFrame(): void {
    const animationName = this.displayedAnimation
    if (animationName == null || !animationItems.has(animationName as string)) {
      return
    }
    
    const frame = new SingleCharacterAnimation(' ', '#000000').getAnimation().getNextFrame(false)
    animationItems.get(animationName as string).getAnimation().addFrame(frame)
    const ui = new UiAnimationFrame(new Vec2(0,0), frame, i16(this.animationEditor.getItems().length))
    ui.setColour('#000000')
    this.animationEditor.addItem(ui)
  }
  
  private closeAnimationWindow(): void {
    reset()
    this.displayedAnimation = null
    this.animationEditor.hide()
    this.subActionPanel.hide()
    this.animationsList.show()
  }

  private handleTextEntry(): void {
    const text = gameState.userEnteredText
    if (text.length > 0) {
      const newNameshowing = this.newNamePanel.isShowing()
      const editorShowing = this.animationEditor.isShowing()
      const lastClickedFrame = getLastFrame()
      const items = this.animationEditor.getItems()
      if (newNameshowing) {
        if (text != this.newNameLabel.getText()) {
          this.newNameLabel.updateText(text)
          this.newNameCreateButton.setBackgroundColour('#ffffff00')
        }
      }
      else if (editorShowing && lastClickedFrame > -1 && lastClickedFrame < items.length) {
        resetText()
        const item = (items[lastClickedFrame] as UiAnimationFrame)
        if (item.canSetNewCharacter()) {
          const lastEnteredCharacter = text.substr(text.length - 2, 1)
          item.setNewCharacter(lastEnteredCharacter)
        }
      }
    }
  }

  public renderLevel(): void {
    this.handleTextEntry()
    super.renderLevel()
  }

  public clone(): Animations {
    return new Animations()
  }
}
