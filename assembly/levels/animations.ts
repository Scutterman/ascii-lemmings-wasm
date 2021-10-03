import { currentLevel, gameState, keyPressListener, messageResponse, resetText } from ".."
import { Vec2 } from "../position"
import { Panel } from "../ui/panel"
import { UIControl } from "../ui/uiControl"
import { MetaScreen } from "./metascreen"
import { getLastFrame, reset, UiAnimationFrame } from "../ui/uiAnimationFrame"
import { animationItems } from "../generatedLevels/animationItems"
import { PanelContainer } from "../ui/panelContainer"
import { SingleCharacterAnimation, StandardAnimation } from "../maps/types"
import { isEditingMap } from "../imports"
import { LabelledButton, EasyLabelledButton } from "../ui/labelledButton"
import { UILabel } from "../ui/uiLabel"
import { LabelledCheckbox } from "../ui/labelledCheckbox"
import { Animation, BlockSide } from "../animation"
import { defaultColour } from "../colours"
import { AnimationFrame } from "../types"

export class Animations extends MetaScreen {
  private animationsList: Panel = new Panel(new Vec2(2, 2))
  private subActionPanel: Panel = new Panel(new Vec2(-1, 38))
  private actionPanel: Panel = new Panel(new Vec2(-1, 40))
  private animationEditor: PanelContainer = new PanelContainer(new Vec2(2, 5))
  private displayedAnimation: string | null = null
  private newNameLabel: LabelledButton = new EasyLabelledButton('Animation Name', 'NEW_NAME')
  private newColourLabel: LabelledButton = new EasyLabelledButton('Colour', 'NEW_COLOUR')
  private newNameCreateButton: UIControl
  private newNamePanel: Panel = new Panel(new Vec2(-1,-1))
  private newButton: UIControl
  
  constructor() {
    super('ANIMATION_EDITOR')
    
    // TODO:: Reset these before leaving
    keyPressListener(true)
    resetText()
    isEditingMap(1)
    
    this.newNameCreateButton = new UIControl(new Vec2(-1, -1), 'Create', () => {
      (currentLevel as Animations).addAnimationByName()
    })
    
    this.uiPanels.push(this.animationsList)

    this.subActionPanel.hide()
    
    this.subActionPanel.addItem(new UIControl(new Vec2(0,0), 'Add', () => {
      (currentLevel as Animations).addAnimationFrame()
    }))

    this.subActionPanel.addItem(new UIControl(new Vec2(0,0), 'Lemming', () => {
      (currentLevel as Animations).addAnimationFrame(true)
    }))

    this.subActionPanel.addItem(new UIControl(new Vec2(0,0), 'Up', () => {
      (currentLevel as Animations).animationEditor.scrollUp()
    }))

    this.subActionPanel.addItem(new UIControl(new Vec2(0,0), 'Down', () => {
      (currentLevel as Animations).animationEditor.scrollDown()
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
      let exportedAnimations = ''
      let animationKeys = animationItems.keys()
      for (let i = 0; i < animationKeys.length; i++) {
        const name = animationKeys[i]
        exportedAnimations += animationItems.get(name).export(name)
      }
      messageResponse('save', 'global.animation', exportedAnimations)
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
    
    this.newNamePanel.addItem(this.newColourLabel)
    this.newNamePanel.addLinebreak()
    
    this.newNamePanel.addItem(new LabelledCheckbox('Is Lemming?', 'ADD_LEMMING_ANIMATION'))
    this.newNamePanel.addLinebreak()

    this.newNamePanel.addItem(new UILabel(new Vec2(-1, -1), "Sides that can be destroyed"))
    this.newNamePanel.addLinebreak()

    this.newNamePanel.addItem(new LabelledCheckbox('Left', 'CAN_DESTROY_LEFT'))
    this.newNamePanel.addItem(new LabelledCheckbox('Top', 'CAN_DESTROY_TOP'))
    this.newNamePanel.addItem(new LabelledCheckbox('Right', 'CAN_DESTROY_RIGHT'))
    this.newNamePanel.addItem(new LabelledCheckbox('Bottom', 'CAN_DESTROY_BOTTOM'))

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
    this.newNameLabel.setControlText('')
    this.newColourLabel.setControlText('')
    this.newNamePanel.show()
  }

  private isChecked(tag: string): boolean {
    const checkbox = this.newNamePanel.getUIByTag(tag)
    return (checkbox != null && checkbox instanceof LabelledCheckbox && (checkbox as LabelledCheckbox).isChecked())
  }

  private getAdditionalDestructionDirectionIfChecked(tag: string, direction: BlockSide): BlockSide {
    return this.isChecked(tag) ? direction : BlockSide.None
  }
  
  private addAnimationByName(): void {
    const animationName = this.newNameLabel.getControlText()
    let animationColour = this.newColourLabel.getControlText()
    if (!this.validateColour(animationColour)) {
      animationColour = defaultColour
    }
    
    if (animationName.length == 0 || animationItems.has(animationName)) {
      this.newNameCreateButton.setBackgroundColour('#cf4a4a')
      return
    }

    const destructionDirection = this.getAdditionalDestructionDirectionIfChecked('CAN_DESTROY_LEFT', BlockSide.Left)
     || this.getAdditionalDestructionDirectionIfChecked('CAN_DESTROY_TOP', BlockSide.Top)
     || this.getAdditionalDestructionDirectionIfChecked('CAN_DESTROY_RIGHT', BlockSide.Right)
     || this.getAdditionalDestructionDirectionIfChecked('CAN_DESTROY_BOTTOM', BlockSide.Bottom)

    
    if (this.isChecked('ADD_LEMMING_ANIMATION')) {
      const animation = new Animation([this.getLemmingFrame()])
      const animationItem = new StandardAnimation(animation, animationColour, destructionDirection)
      animationItems.set(animationName, animationItem)
    } else {
      const animationItem = new SingleCharacterAnimation(' ', animationColour, destructionDirection)
      animationItems.set(animationName, animationItem)
    }

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
      const ui = new UiAnimationFrame(new Vec2(0,0), frame, i16(i), colour)
      this.animationEditor.addItem(ui)
    }

    this.displayedAnimation = animationName
    
    this.animationsList.hide()
    this.animationEditor.show()
    this.subActionPanel.show()
  }

  private addAnimationFrame(isLemming: boolean = false): void {
    const animationName = this.displayedAnimation
    if (animationName == null || !animationItems.has(animationName as string)) {
      return
    }
    
    const frame = isLemming
      ? this.getLemmingFrame()
      : new SingleCharacterAnimation(' ', defaultColour).getAnimation().getNextFrame(false)
    animationItems.get(animationName as string).getAnimation().addFrame(frame)
    const ui = new UiAnimationFrame(new Vec2(0,0), frame, i16(this.animationEditor.getItems().length), defaultColour)
    this.animationEditor.addItem(ui)
  }

  private getLemmingFrame(): AnimationFrame {
    const frame: AnimationFrame = []
    for (let i = 0; i < 8; i++) {
      frame.push(' '.repeat(8).split(''))
    }
    return frame
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
        this.handleNewNamescreenTextEntry(text)
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

  private handleNewNamescreenTextEntry(text: string): void {
    const _focused = gameState.focusedUiControl
    if (_focused == null || !(_focused instanceof LabelledButton)) {
       return
    }

    const focused = _focused as LabelledButton
    const tag = focused.getTag()
    if (tag.length == 0) {
      return
    }

    const existingText = focused.getControlText()

    if (text == existingText) {
      return
    }
      
    focused.setControlText(existingText + text)
    resetText()

    if (tag == this.newNameLabel.getTag()) {
      this.newNameCreateButton.setBackgroundColour('#ffffff00')
    }
  }

  private validateColour(colour: string): boolean {
    if (colour.length != 7 || !colour.startsWith('#')) {
      return false
    }

    const colourcharacters = colour.split('')
    const safeColourcharacters = 'ABCDEFabcdef0123456789'.split('')
    for (var i = 1; i < colourcharacters.length; i++) {
      if (!safeColourcharacters.includes(colourcharacters[i])) {
        return false
      }
    }

    return true
  }

  public renderLevel(): void {
    this.handleTextEntry()
    super.renderLevel()
  }

  public clone(): Animations {
    return new Animations()
  }
}
