import { gameState, lemmings } from ".."
import { Lemming } from "../lemming"
import { addLayerToScreen, renderToScreen } from "../loop"
import { LemmingGift, lemmingGiftLabel, LevelTiles, UIAction } from "../types"
import { BaseLevel } from "./baseLevel"
import { getSurroundingTiles } from "../map"
import { insertText } from "../text"
import { UIControl } from "../ui/uiControl"
import { Vec2 } from "../position"
import { Block } from "../actions/block"
import { UILabel } from "../ui/uiLabel"

export class Level extends BaseLevel {
  private canSpawnMore: boolean = true
  private skills: Map<LemmingGift, u8> = new Map()
  private isDirty: boolean = false

  constructor(tag: string, lemmingsToSpawn: u8, numberOfLemmingsForSucces: u8, map: LevelTiles, isMetaScreen: boolean = false, private buttonYCoordinate: u8 = 40) {
    super(tag, lemmingsToSpawn, numberOfLemmingsForSucces, map, isMetaScreen)

    if (!this.isMetaScreen) {
      this.makeButton(1, this.buttonYCoordinate, 'C', () => { gameState.setSelectedGift(LemmingGift.ClimbingBoots) })
      this.addLabel(LemmingGift.ClimbingBoots, 1, this.buttonYCoordinate + 1)
      
      this.makeButton(4, this.buttonYCoordinate, 'U', () => { gameState.setSelectedGift(LemmingGift.Umbrella) })
      this.addLabel(LemmingGift.Umbrella, 4, this.buttonYCoordinate + 1)
      
      this.makeButton(7, this.buttonYCoordinate, 'E', () => { gameState.setSelectedGift(LemmingGift.Bomb) })
      this.addLabel(LemmingGift.Bomb, 7, this.buttonYCoordinate + 1)
      
      this.makeButton(10, this.buttonYCoordinate, 'T', () => { gameState.setSelectedGift(LemmingGift.Block) })
      this.addLabel(LemmingGift.Block, 10, this.buttonYCoordinate + 1)
      
      this.makeButton(13, this.buttonYCoordinate, '/', () => { gameState.setSelectedGift(LemmingGift.BrickSack) })
      this.addLabel(LemmingGift.BrickSack, 13, this.buttonYCoordinate + 1)
      
      this.makeButton(16, this.buttonYCoordinate, 'B', () => { gameState.setSelectedGift(LemmingGift.Hammer) })
      this.addLabel(LemmingGift.Hammer, 16, this.buttonYCoordinate + 1)
      
      this.makeButton(19, this.buttonYCoordinate, '\\', () => { gameState.setSelectedGift(LemmingGift.Pickaxe) })
      this.addLabel(LemmingGift.Pickaxe, 19, this.buttonYCoordinate + 1)
      
      this.makeButton(22, this.buttonYCoordinate, 'D', () => { gameState.setSelectedGift(LemmingGift.Shovel) })
      this.addLabel(LemmingGift.Shovel, 22, this.buttonYCoordinate + 1)

      this.uiLabels.push(new UILabel(new Vec2(0, this.buttonYCoordinate - 2), '', 'SELECTED_GIFT'))
      this.uiLabels.push(new UILabel(new Vec2(18, this.buttonYCoordinate - 2), '', 'LEMMING_INFO'))
      this.uiLabels.push(new UILabel(new Vec2(36, this.buttonYCoordinate - 2), 'OUT: 0', 'LEMMING_OUT'))
      this.uiLabels.push(new UILabel(new Vec2(50, this.buttonYCoordinate - 2), 'SAVED: 0%', 'LEMMING_SAVED'))
      this.uiLabels.push(new UILabel(new Vec2(69, this.buttonYCoordinate - 2), '', 'TIMER'))
      this.uiControls.push(new UIControl(new Vec2(25, this.buttonYCoordinate), 'm', () => { gameState.setNukeGift() }))
    }
  }

  protected setSkillQuantity(skill: LemmingGift, quantity: u8): void {
    if (quantity < 1) {
      this.updateSkillQuantity(skill, '0')
      return
    }

    this.skills.set(skill, quantity)
    if (quantity == u8.MAX_VALUE) {
      this.updateSkillQuantity(skill, '∞')
    } else {
      this.updateSkillQuantity(skill, quantity.toString())
    }
  }

  public canUseSkill(skill: LemmingGift): boolean {
    if (skill == LemmingGift.None) {
      return true
    } else if (this.skills.has(skill)) {
      return this.skills.get(skill) > 0
    } else {
      return false
    }
  }

  public skillSelected(skill: LemmingGift): void {
    if (!lemmingGiftLabel.has(skill)) {
      return
    }
    
    this.updateLabel('SELECTED_GIFT', lemmingGiftLabel.get(skill))
  }

  public skillUsed(skill: LemmingGift): void {
    if (this.skills.has(skill)) {
      const currentQuantity: u8 = this.skills.get(skill)
      if (currentQuantity <= 1) {
        this.skills.delete(skill)
        this.updateSkillQuantity(skill, '0')
      } else if (currentQuantity != u8.MAX_VALUE) {
        const quantity = currentQuantity - 1
        this.skills.set(skill, quantity)
        this.updateSkillQuantity(skill, quantity.toString())
      }
    }
  }

  public makeButton(x: i16, y:i16, text: string, action: UIAction): void {
    this.uiControls.push(new UIControl(new Vec2(x, y), text, action))
  }

  public addLabel(gift: LemmingGift, x: i16, y: i16): void {
    this.uiLabels.push(new UILabel(new Vec2(x, y), '0', 'GIFT_COUNTER_' + gift.toString()))
  }

  public updateSkillQuantity(gift: LemmingGift, newText: string): void {
    this.updateLabel('GIFT_COUNTER_' + gift.toString(), newText)
  }

  public nuke(): void {
    this.canSpawnMore = false
    for (let i = 0; i < lemmings.length; i++) {
      lemmings[i].triggerExplosion()
    }
  }

  public processLemmingSelect(mouseTileX: i32, mouseTileY: i32, processLemmingClick: boolean): boolean {
    if (lemmings.length == 0) {
      return false
    }
    
    this.updateLabel('LEMMING_INFO', '')
    
    for (let i = 0; i < lemmings.length; i++) {
      const position: Vec2 = lemmings[i].position
      if (mouseTileX == position.x && mouseTileY == position.y) {
        this.updateLabel('LEMMING_INFO', lemmings[i].action.label())
        
        if (processLemmingClick) {
          const giftApplied = lemmings[i].setGift(gameState.selectedGift)
          if (giftApplied) {
            gameState.setSelectedGift(LemmingGift.None)
            return true
          }
        }
      }
    }

    return false
  }
  
  public gameLoop(): boolean {
    this.timeLeft--
    this.canSpawnMore = this.canSpawnMore && lemmings.length < (this.numberOfLemmings as i32)
    const allLemmingsRemoved = !this.canSpawnMore && this.numberOfLemmingsRemoved == lemmings.length
  
    if (allLemmingsRemoved || this.timeLeft == 0) {
      this.hasEnded = true
      return false
    } else if (this.canSpawnMore) {
      if (gameState.framesSinceLastLemming >= gameState.framesBetweenLemmingSpawns) {
        const lemming = new Lemming()
        lemmings.push(lemming)
        this.updateLabel('LEMMING_OUT', 'OUT: ' + lemmings.length.toString())
        gameState.framesSinceLastLemming = 0
        
        const player = gameState.autoplayer
        if (player != null) {
          player.onLemmingSpawn(lemming)
        }
      } else {
        gameState.framesSinceLastLemming++
      }
    }
  
    this.updateLemmings()
    this.isDirty = true
    return true
  }

  public updateLemmings(): void {
    for (let i = 0; i < lemmings.length; i++) {
      if (lemmings[i].removed) { continue }
      lemmings[i].update(getSurroundingTiles(this.map, lemmings[i].position))
      if (lemmings[i].exited) {
        this.numberOfLemmingsSaved++
        const savedPercent = this.getLemmingSavedPercent()
        this.updateLabel('LEMMING_SAVED', 'Saved: ' + savedPercent.toString() + '%')
      }

      if (lemmings[i].removed) {
        this.numberOfLemmingsRemoved++
      }
    }
  }

  public giveGiftToLemming(lemmingNumber: u8, gift: LemmingGift): void {
    if (lemmingNumber >= 0 && u8(lemmings.length) >= lemmingNumber) {
      lemmings[lemmingNumber].setGift(gift)
    }
  }
  
  public isBlockerInLocation(location: Vec2): boolean {
    for (let i = 0; i < lemmings.length; i++) {
      if (lemmings[i].position.equals(location) && lemmings[i].action instanceof Block) {
        return true
      }
    }

    return false
  }
  
  public renderLevel(): void {
    const map = this.cloneMap()
    this.render(map)

    this.renderTimer()

    for (let i = 0; i < lemmings.length; i++) {
      const lemming = lemmings[i]
      if (lemming.removed) { continue }

      const colour = lemming.areYouExploding() ? '#ff0000' : '#00ff00'
      
      addLayerToScreen()
      this.padRows(map.length)
      this.setYPosition(lemming.position.y)

      // Pad from the beginning of the screen to the character before the lemming so the lemming is in the correct position
      const xPaddingLeft = lemming.position.x
      
      // Pad between the end lemming character to the edge of the screen
      const xPaddingRight = map[0].length - lemming.position.x - 1
      const row = ' '.repeat(xPaddingLeft) + lemming.renderFrame(this.isDirty) + ' '.repeat(xPaddingRight)
      renderToScreen(this.padColumn(row), colour)
    }

    this.isDirty = false
  }

  protected renderTimer(): void {
    this.updateLabel('TIMER', this.timeLeft.toString())
  }

  public clone(): BaseLevel {
    const newMap = this.cloneMap()
    return new Level(this.tag, this.numberOfLemmings, this.numberOfLemmingsForSuccess, newMap, this.isMetaScreen, this.buttonYCoordinate)
  }
  
  private padRows(rowsWithContent: i32): void {
    const totalRows: i32 = gameState.screenHeight / gameState.characterHeight
    gameState.lastRowPadding = 0
    for (let i = totalRows; i > rowsWithContent; i -= 2) {
      gameState.lastRowPadding++
      renderToScreen('')
    }
  }

  private setYPosition(yPosition: i16): void {
    for (let i = 0; i < yPosition; i++) {
      renderToScreen('')
    }
  }

  private padColumn(text: string): string {
    const totalColumns = gameState.screenWidth / gameState.characterWidth
    const charactersSpare = totalColumns - text.length
    const charactersRequiredOnLeft = Math.floor(charactersSpare / 2) as i32
    gameState.lastColumnPadding = charactersRequiredOnLeft
    return ' '.repeat(charactersRequiredOnLeft) + text
  }

  protected render(map: LevelTiles): i32 {
    for (let i = 0; i < this.uiControls.length; i++) {
      insertText(map, this.uiControls[i].getText(), this.uiControls[i].getPosition())
    }

    for (let i = 0; i < this.uiLabels.length; i++) {
      insertText(map, this.uiLabels[i].getText(), this.uiLabels[i].getPosition())
    }
    
    addLayerToScreen(true)
    this.padRows(map.length)
    let rightmostColumn: i32 = 0
    for (let i = 0; i < map.length; i++) {
      const column = this.padColumn(map[i].join(''))
      rightmostColumn = Math.max(rightmostColumn, column.length) as i32
      renderToScreen(column);
    }

    return rightmostColumn
  }
}
