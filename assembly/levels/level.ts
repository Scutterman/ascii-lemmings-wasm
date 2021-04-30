import { gameState, lemmings } from ".."
import { Lemming } from "../lemming"
import { addLayerToScreen, renderToScreen } from "../loop"
import { LemmingGift, lemmingGiftLabel, LevelTiles, UIAction } from "../types"
import { BaseLevel } from "./baseLevel"
import { BOUNDARIES_X, BOUNDARIES_Y, getSurroundingTiles, VISIBLE_X, VISIBLE_Y } from "../map"
import { UIControl } from "../ui/uiControl"
import { Vec2 } from "../position"
import { Block } from "../actions/block"
import { UILabel } from "../ui/uiLabel"
import { Panel } from "../ui/panel"

export class Level extends BaseLevel {
  private canSpawnMore: boolean = true
  private skills: Map<LemmingGift, u8> = new Map()
  private isDirty: boolean = false
  private skillsPanel: Panel
  private skillsLabelPanel: Panel

  constructor(tag: string, lemmingsToSpawn: u8, numberOfLemmingsForSucces: u8, map: LevelTiles, isMetaScreen: boolean = false, private buttonYCoordinate: u8 = 40) {
    super(tag, lemmingsToSpawn, numberOfLemmingsForSucces, map, isMetaScreen)

    this.skillsPanel = new Panel(new Vec2(1, this.buttonYCoordinate))
    this.skillsLabelPanel = new Panel(new Vec2(1, this.buttonYCoordinate + 2))
    this.uiPanels.push(this.skillsPanel)
    this.uiPanels.push(this.skillsLabelPanel)

    if (!this.isMetaScreen) {
      this.addSkillToPanel('C', () => { gameState.setSelectedGift(LemmingGift.ClimbingBoots) })
      this.addSkillLabelToPanel(LemmingGift.ClimbingBoots)
      
      this.addSkillToPanel('U', () => { gameState.setSelectedGift(LemmingGift.Umbrella) })
      this.addSkillLabelToPanel(LemmingGift.Umbrella)
      
      this.addSkillToPanel('E', () => { gameState.setSelectedGift(LemmingGift.Bomb) })
      this.addSkillLabelToPanel(LemmingGift.Bomb)
      
      this.addSkillToPanel('T', () => { gameState.setSelectedGift(LemmingGift.Block) })
      this.addSkillLabelToPanel(LemmingGift.Block)
      
      this.addSkillToPanel('/', () => { gameState.setSelectedGift(LemmingGift.BrickSack) })
      this.addSkillLabelToPanel(LemmingGift.BrickSack)
      
      this.addSkillToPanel('B', () => { gameState.setSelectedGift(LemmingGift.Hammer) })
      this.addSkillLabelToPanel(LemmingGift.Hammer)
      
      this.addSkillToPanel('\\', () => { gameState.setSelectedGift(LemmingGift.Pickaxe) })
      this.addSkillLabelToPanel(LemmingGift.Pickaxe)
      
      this.addSkillToPanel('D', () => { gameState.setSelectedGift(LemmingGift.Shovel) })
      this.addSkillLabelToPanel(LemmingGift.Shovel)

      this.uiLabels.push(new UILabel(new Vec2(0, this.buttonYCoordinate - 2), '', 'SELECTED_GIFT'))
      this.uiLabels.push(new UILabel(new Vec2(18, this.buttonYCoordinate - 2), '', 'LEMMING_INFO'))
      this.uiLabels.push(new UILabel(new Vec2(36, this.buttonYCoordinate - 2), 'OUT: 0', 'LEMMING_OUT'))
      this.uiLabels.push(new UILabel(new Vec2(50, this.buttonYCoordinate - 2), 'SAVED: 0%', 'LEMMING_SAVED'))
      this.uiLabels.push(new UILabel(new Vec2(69, this.buttonYCoordinate - 2), '', 'TIMER'))
      this.skillsPanel.items.push(new UIControl(new Vec2(0,0), 'm', () => { gameState.setNukeGift() }))
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

  public addSkillToPanel(text: string, action: UIAction): void {
    this.skillsPanel.items.push(new UIControl(new Vec2(0, 0), text, action))
  }

  public addSkillLabelToPanel(gift: LemmingGift): void {
    this.skillsLabelPanel.items.push(new UILabel(new Vec2(0, 0), '0', 'GIFT_COUNTER_' + gift.toString()))
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
    
    mouseTileX += this.scrollPosition.x
    mouseTileY += this.scrollPosition.y
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
    this.render(map, true)

    this.updateLabel('TIMER', this.timeLeft.toString())

    for (let i = 0; i < lemmings.length; i++) {
      const lemming = lemmings[i]
      if (lemming.removed) { continue }

      if (
        lemming.position.x < this.scrollPosition.x ||
        lemming.position.x > this.scrollPosition.x + VISIBLE_X ||
        lemming.position.y < this.scrollPosition.y ||
        lemming.position.y > this.scrollPosition.y + VISIBLE_Y
      ) { continue }

      const colour = lemming.areYouExploding() ? '#ff0000' : '#00ff00'
      
      addLayerToScreen()
      this.setYPosition(lemming.position.y - this.scrollPosition.y)

      // Pad from the beginning of the screen to the character before the lemming so the lemming is in the correct position
      const xPaddingLeft = lemming.position.x - this.scrollPosition.x
      
      // Pad between the end lemming character to the edge of the screen
      const xPaddingRight = map[0].length - lemming.position.x - 1
      const row = ' '.repeat(xPaddingLeft) + lemming.renderFrame(this.isDirty) + ' '.repeat(xPaddingRight)
      renderToScreen(row, colour)
    }

    this.renderControls()

    this.isDirty = false
  }

  public clone(): BaseLevel {
    const newMap = this.cloneMap()
    return new Level(this.tag, this.numberOfLemmings, this.numberOfLemmingsForSuccess, newMap, this.isMetaScreen, this.buttonYCoordinate)
  }
  
  private setYPosition(yPosition: i16): void {
    for (let i = 0; i < yPosition; i++) {
      renderToScreen('')
    }
  }

  protected render(map: LevelTiles, isRenderingGameSection: boolean = false): void {
    const startY = isRenderingGameSection ? this.scrollPosition.y : 0
    const endY = isRenderingGameSection ? this.scrollPosition.y + VISIBLE_Y + BOUNDARIES_Y : map.length
    
    addLayerToScreen(isRenderingGameSection)
    for (let i = startY; i < endY; i++) {
      const mapLine = isRenderingGameSection
        ? map[i].join('').slice(this.scrollPosition.x, this.scrollPosition.x + VISIBLE_X + BOUNDARIES_X)
        : map[i].join('')
      renderToScreen(mapLine);
    }
  }
}
