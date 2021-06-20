import { gameState, lemmings } from ".."
import { BomberAnimation, Lemming } from "../lemming"
import { getRenderedTextArray, lineBreak, removeMapTile, renderMapTile, renderRelativeElement, renderTextArrayToScreen } from "../loop"
import { LemmingGift, lemmingGiftLabel, LevelTileDetail } from "../types"
import { BaseLevel } from "./baseLevel"
import { BOUNDARIES_X, BOUNDARIES_Y, getSurroundingTiles, TILE_AIR, VISIBLE_X, VISIBLE_Y } from "../map"
import { UIControl } from "../ui/uiControl"
import { Vec2 } from "../position"
import { BlockerAnimation } from "../actions/block"
import { UILabel } from "../ui/uiLabel"
import { Panel } from "../ui/panel"
import { Animation } from "../animation"
import { LemmingActionControl } from "../ui/lemmingActionControl"
import { BasherAnimation } from "../actions/basher"
import { BuilderAnimation } from "../actions/builder"
import { ClimberAnimation } from "../actions/climb"
import { DiggerAnimation } from "../actions/digger"
import { MinerAnimation } from "../actions/miner"
import { FloaterAnimation } from "../actions/umbrella"
import { LevelMapDetail } from "../maps/types"
import { removeItem } from "../vdom/elements"
import { UPSCALE_MULTIPLIER } from "../upscale"

const buttonAreaArray = [
  '__________________________________________________________________________',
  '|                                                                        |',
  '|                                                                        |',
  '|                                                                        |',
  '|                                                                        |',
  '|                                                                        |',
  '|                                                                        |',
  '|                                                                        |',
  '__________________________________________________________________________'
]

let buttonArea: string = ''

export class Level extends BaseLevel {
  private canSpawnMore: boolean = true
  private skills: Map<LemmingGift, u8> = new Map()
  private isDirty: boolean = false
  private skillsPanel: Panel
  private skillsLabelPanel: Panel

  constructor(tag: string, private difficulty: string, lemmingsToSpawn: u8, numberOfLemmingsForSucces: u8, private _map: LevelMapDetail, isMetaScreen: boolean = false, private buttonYCoordinate: u8 = 40) {
    super(tag, lemmingsToSpawn, numberOfLemmingsForSucces, _map, isMetaScreen)

    this.skillsPanel = new Panel(new Vec2(2, this.buttonYCoordinate))
    this.skillsLabelPanel = new Panel(new Vec2(2, this.buttonYCoordinate + 2))
    this.uiPanels.push(this.skillsPanel)
    this.uiPanels.push(this.skillsLabelPanel)

    if (!this.isMetaScreen) {
      this.addSkillToPanel(new ClimberAnimation(), LemmingGift.ClimbingBoots)
      this.addSkillToPanel(new FloaterAnimation(), LemmingGift.Umbrella)
      this.addSkillToPanel(new BomberAnimation(), LemmingGift.Bomb)
      this.addSkillToPanel(new BlockerAnimation(), LemmingGift.Block)
      this.addSkillToPanel(new BuilderAnimation(), LemmingGift.BrickSack)
      this.addSkillToPanel(new BasherAnimation(), LemmingGift.Hammer)
      this.addSkillToPanel(new MinerAnimation(), LemmingGift.Pickaxe)
      this.addSkillToPanel(new DiggerAnimation(), LemmingGift.Shovel)

      this.uiLabels.push(new UILabel(new Vec2(2, this.buttonYCoordinate - 2), '', 'SELECTED_GIFT'))
      this.uiLabels.push(new UILabel(new Vec2(16, this.buttonYCoordinate - 2), '', 'LEMMING_INFO'))
      this.uiLabels.push(new UILabel(new Vec2(32, this.buttonYCoordinate - 2), 'OUT: 0', 'LEMMING_OUT'))
      this.uiLabels.push(new UILabel(new Vec2(46, this.buttonYCoordinate - 2), 'SAVED: 0%', 'LEMMING_SAVED'))
      this.uiLabels.push(new UILabel(new Vec2(65, this.buttonYCoordinate - 2), '', 'TIMER'))
      this.skillsPanel.items.push(new UIControl(new Vec2(0,0), 'm', () => { gameState.setNukeGift() }))

      buttonArea = ''
      for (let buttonAreaLineIndex = 0; buttonAreaLineIndex < buttonAreaArray.length; buttonAreaLineIndex++) {
        const line = buttonAreaArray[buttonAreaLineIndex].split('')
        let lineText = ''
        for (let buttonAreaCharacterIndex = 0; buttonAreaCharacterIndex < line.length; buttonAreaCharacterIndex++) {
          lineText += line[buttonAreaCharacterIndex].repeat(UPSCALE_MULTIPLIER)
        }
        lineText += lineBreak
        buttonArea += lineText.repeat(UPSCALE_MULTIPLIER)
      }
      buttonArea = buttonArea.substr(0, buttonArea.length - lineBreak.length)
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

  public addSkillToPanel(skillAnimation: Animation, gift: LemmingGift): void {
    this.skillsPanel.items.push(new LemmingActionControl(new Vec2(0, 0), gift, skillAnimation))
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
  
  public renderLevel(): void {
    this.render(this.map, true)

    this.updateLabel('TIMER', this.timeLeft.toString())

    for (let i = 0; i < lemmings.length; i++) {
      const lemming = lemmings[i]
      if (lemming.removed) { continue }

      removeItem(lemming.elementId)
      const position = new Vec2(lemming.position.x - this.scrollPosition.x, lemming.position.y - this.scrollPosition.y)
      if (
        position.x < 0 ||
        position.x > i16(VISIBLE_X) ||
        position.y < 0 ||
        position.y > i16(VISIBLE_Y)
      ) { continue }

      const colour = lemming.areYouExploding() ? '#ff0000' : '#00ff00'
      
      const info = renderTextArrayToScreen(getRenderedTextArray(lemming.renderFrame(this.isDirty)), position, false, colour)
      lemming.elementId = info.id
      info.dimensions.position.x += this.scrollPosition.x
      info.dimensions.position.y += this.scrollPosition.y
      lemming.position = info.dimensions.position
      lemming.size = info.dimensions.size
    }

    this.renderControls(this.isDirty)

    this.isDirty = false
  }

  public clone(): BaseLevel {
    const newMap = this._map.clone()
    return new Level(this.tag, this.difficulty, this.numberOfLemmings, this.numberOfLemmingsForSuccess, newMap, this.isMetaScreen, this.buttonYCoordinate)
  }
  
  protected render(map: LevelTileDetail, isRenderingGameSection: boolean = false, resetAll: boolean = false): void {
    const firstRender = this.firstRender
    if (firstRender) {
      this.firstRender = false
      resetAll = true
      isRenderingGameSection = false
    }
    
    const startY = isRenderingGameSection ? this.scrollPosition.y : 0
    const endY = isRenderingGameSection ? this.scrollPosition.y + VISIBLE_Y + BOUNDARIES_Y : map.length
    const startX = isRenderingGameSection ? this.scrollPosition.x : 0
    const endX = isRenderingGameSection
      ? this.scrollPosition.x + VISIBLE_X + BOUNDARIES_X
      : map.length > 0
        ? map[0].length
        : 0
    
    for (let row: i16 = startY; row < endY; row++) {
      for (let col: i16 = startX; col < endX; col++) {
        if (row >= map.length) {
          continue
        }

        if (col >= map[row].length) {
          continue
        }

        if (map[row][col].animation.hasNextFrame()) {
          map[row][col].isDirty = true
        }

        if (map[row][col].needsRemoval) {
          removeMapTile(map[row][col].elementId)
          map[row][col].needsRemoval = false
        }
        
        if (!resetAll && (map[row][col].tile == TILE_AIR || !map[row][col].isDirty)) {
          map[row][col].isDirty = false
          continue
        }
        
        const text: string[] = []
        const frame = map[row][col].animation.getNextFrame(this.isDirty)
        for (let frameRow = 0; frameRow < frame.length; frameRow++) {
          if (frameRow >= text.length) { text.push('') }
          for (let frameCol = 0; frameCol < frame[frameRow].length; frameCol++) {
            text[frameRow] += frame[frameRow][frameCol]
          }
        }
        
        map[row][col].elementId = renderMapTile(text, new Vec2(col, row), map[row][col].colour)
        map[row][col].isDirty = false
      }
    }

    if (!this.isMetaScreen) {
      let position = new Vec2(0, i16(VISIBLE_Y + BOUNDARIES_Y - 1))
      renderRelativeElement(buttonArea, position)
    }
    this.lastScrollPosition = this.scrollPosition.clone()
  }
}
