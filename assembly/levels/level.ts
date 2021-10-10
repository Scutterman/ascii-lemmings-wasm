import { currentLevel, gameState, lemmings, log } from ".."
import { BomberAnimation, Lemming } from "../lemming"
import { getRenderedTextArray, removeMapTile, renderMapTile, renderTextArrayToScreen } from "../loop"
import { LemmingGift, lemmingGiftLabel, LevelTileDetail } from "../types"
import { BaseLevel } from "./baseLevel"
import { BOUNDARIES_X, BOUNDARIES_Y, getSurroundingTileDetail, TILE_AIR, VISIBLE_X, VISIBLE_Y } from "../map"
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
import { Walk } from "../actions/walk"

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
      this.skillsPanel.addItem(new UIControl(new Vec2(0,0), 'm', () => { gameState.setNukeGift() }))
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
    this.skillsPanel.addItem(new LemmingActionControl(new Vec2(0, 0), gift, skillAnimation))
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
      
      lemmings[i].update()
      
      if (lemmings[i].exited) {
        this.numberOfLemmingsSaved++
        const savedPercent = this.getLemmingSavedPercent()
        this.updateLabel('LEMMING_SAVED', 'Saved: ' + savedPercent.toString() + '%')
      }

      const tile = getSurroundingTileDetail(lemmings[i].position)
      if (tile != null && tile.isTrap == true) {
        tile.isTrapActivated = true
        lemmings[i].removeFromGame()
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

      const colour = lemming.areYouExploding() ? '#ff0000' : '#2866d7'
      const text = lemming.renderFrame(this.isDirty)
      const positionOffset = lemming.action.getPositionOffset()

      position.y -= positionOffset
      const info = renderTextArrayToScreen(text, position, false, colour)
      lemming.elementId = info.id
      info.dimensions.position.x += this.scrollPosition.x
      info.dimensions.position.y += this.scrollPosition.y + positionOffset
      lemming.position = info.dimensions.position
      lemming.size = info.dimensions.size
    }

    this.renderControls(this.isDirty)

    this.isDirty = false
  }

  public clone(): BaseLevel {
    const newMap = this._map.clone()
    const level = new Level(this.tag, this.difficulty, this.numberOfLemmings, this.numberOfLemmingsForSuccess, newMap, this.isMetaScreen, this.buttonYCoordinate)
    level.setSkillQuantity(LemmingGift.ClimbingBoots, this.skills.get(LemmingGift.ClimbingBoots))
    level.setSkillQuantity(LemmingGift.Umbrella, this.skills.get(LemmingGift.Umbrella))
    level.setSkillQuantity(LemmingGift.Bomb, this.skills.get(LemmingGift.Bomb))
    level.setSkillQuantity(LemmingGift.Block, this.skills.get(LemmingGift.Block))
    level.setSkillQuantity(LemmingGift.BrickSack, this.skills.get(LemmingGift.BrickSack))
    level.setSkillQuantity(LemmingGift.Hammer, this.skills.get(LemmingGift.Hammer))
    level.setSkillQuantity(LemmingGift.Pickaxe, this.skills.get(LemmingGift.Pickaxe))
    level.setSkillQuantity(LemmingGift.Shovel, this.skills.get(LemmingGift.Shovel))
    return level
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

        const tileDetail = map[row][col]
        const animation: Animation = tileDetail.isTrapActivated && tileDetail.trapAnimation != null
          ? tileDetail.trapAnimation as Animation
          : tileDetail.animation

        if (animation.hasNextFrame()) {
          tileDetail.isDirty = true
        }

        if (tileDetail.needsRemoval) {
          removeMapTile(tileDetail.elementId)
          tileDetail.needsRemoval = false
        }
        
        if (!resetAll && (!tileDetail.isDirty)) {
          tileDetail.isDirty = false
          continue
        }
        
        const text = animation.getNextFrameAsText(this.isDirty)
        tileDetail.elementId = renderMapTile(text, new Vec2(col, row), tileDetail.colour)
        tileDetail.isDirty = false

        if (tileDetail.isTrapActivated) {
          if (animation.isLastFrame()) {
            log('Deactivating trap animation')
            tileDetail.isTrapActivated = false
            tileDetail.isDirty = true
          }
        }
      }
    }

    this.lastScrollPosition = this.scrollPosition.clone()
  }
}
