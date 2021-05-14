import { BOUNDARIES_X, BOUNDARIES_Y, CONTROLS_Y, mapToTiles, SurroundingTiles, TILE_BOUNDARY, TILE_EXIT, TILE_SIDE, VISIBLE_X, VISIBLE_Y } from "../map"
import { Vec2 } from "../position"
import { LemmingGift, LevelTiles, Tile, TileDetail, LevelTileDetail } from "../types"
import { UIControl } from "../ui/uiControl"
import { UILabel } from "../ui/uiLabel"
import { Panel } from "../ui/panel"
import { Animation } from "../animation"

const buttonArea = mapToTiles([
  '|                                                                        |',
  '|                                                                        |',
  '|                                                                        |',
  '|                                                                        |',
  '|                                                                        |',
  '|                                                                        |',
  '|                                                                        |',
  '__________________________________________________________________________'
])

export abstract class BaseLevel {
  public numberOfLemmings: u8
  public numberOfLemmingsForSuccess: u8
  public timeLeft: u16 = 300
  public numberOfLemmingsSaved: u8 = 0
  public numberOfLemmingsRemoved: u8 = 0
  public uiControls: UIControl[] = []
  public uiLabels: UILabel[] = []
  public uiPanels: Panel[] = []
  public isMetaScreen: boolean
  public hasEnded: boolean = false
  public scrollPosition: Vec2 = new Vec2(0,0)

  public abstract processLemmingSelect(mouseTileX: i32, mouseTileY: i32, processLemmingClick: boolean): boolean
  public abstract updateLemmings(): void
  public abstract gameLoop(): boolean
  public abstract nuke(): void
  public abstract isBlockerInLocation(location: Vec2): boolean
  public abstract giveGiftToLemming(lemmingNumber: u8, gift: LemmingGift): void
  public abstract clone(): BaseLevel
  public abstract renderLevel(): void
  protected abstract render(map: LevelTileDetail, isRenderingGameSection: boolean): void

  public abstract canUseSkill(skill: LemmingGift): boolean
  public abstract skillUsed(skill: LemmingGift): void
  public abstract skillSelected(skill: LemmingGift): void
  
  constructor(public tag: string, lemmingsToSpawn: u8, numberOfLemmingsForSucces: u8, public map: LevelTileDetail, isMetaScreen: boolean = false) {
    this.numberOfLemmings = lemmingsToSpawn
    this.numberOfLemmingsForSuccess = numberOfLemmingsForSucces
    this.isMetaScreen = isMetaScreen 
  }
  
  public getLemmingSavedPercent(): u8 {
    if (this.numberOfLemmings == 0) { return 100 }
    return u8(Math.round(this.numberOfLemmingsSaved / (this.numberOfLemmings * 0.01)))
  }
  
  public getLemmingNeededPercent(): u8 {
    if (this.numberOfLemmings == 0) { return 0 }
    return u8(Math.round(this.numberOfLemmingsForSuccess / (this.numberOfLemmings * 0.01)))
  }
  
  protected cloneMap(): LevelTileDetail {
    const mapClone: LevelTileDetail = []
    for (let i = 0; i < this.map.length; i++) {
      for (let j = 0; j < this.map[i].length; j++) {
        if (j == 0) { mapClone[i] = [] }
        mapClone[i].push(this.map[i][j])
      }
    }
    return mapClone
  }

  public updateLabel(tag: string, newText: string): void {
    const label = this.getUIByTag(tag)
    if (label != null) {
      label.updateText(newText)
    }
  }

  protected getUIByTag(tag: string): UILabel | null {
    if (tag == '') {
      return null
    }
    
    for (let i = 0; i < this.uiLabels.length; i++) {
      if (this.uiLabels[i].getTag() == tag) {
        return this.uiLabels[i]
      }
    }
    
    for (let i = 0; i < this.uiControls.length; i++) {
      if (this.uiControls[i].getTag() == tag) {
        return this.uiControls[i]
      }
    }
    
    for (let i = 0; i < this.uiPanels.length; i++) {
      const panel = this.uiPanels[i]
      for (let j = 0; j < panel.items.length; j++) {
        if (panel.items[j].getTag() == tag) {
          return panel.items[j]
        }
      }
    }
    
    return null
  }

  private fillMap(x: u16, y: u16): LevelTileDetail {
    let map: LevelTileDetail = []
    for (let i: u16 = 0; i < y; i++) { 
      map.push([])
      for (let j: u16 = 0; j < x; j++) {
        map[i].push(new TileDetail(' ', '#000000', new Animation([])))
      }
      }
    return map
  }

  protected renderControls(isDirty: boolean): void {
    let maxY: u16 = VISIBLE_Y + CONTROLS_Y + BOUNDARIES_Y
    let maxX: u16 = VISIBLE_X + BOUNDARIES_X
    
    let map = this.fillMap(maxX, maxY)
    const delta = map.length - buttonArea.length

    if (!this.isMetaScreen) {
      for (let buttonAreaRow = 0; buttonAreaRow < buttonArea.length; buttonAreaRow++) {
        for (let buttonAreaColumn = 0; buttonAreaColumn < buttonArea[buttonAreaRow].length; buttonAreaColumn++) {
          map[delta + buttonAreaRow][buttonAreaColumn] = buttonArea[buttonAreaRow][buttonAreaColumn].clone()
        }
      }
    }

    for (let i = 0; i < this.uiControls.length; i++) {
      this.uiControls[i].render(map, isDirty)
    }

    for (let i = 0; i < this.uiLabels.length; i++) {
      this.uiLabels[i].render(map, isDirty)
    }

    for (let i = 0; i < this.uiPanels.length; i++) {
      this.uiPanels[i].render(map, isDirty)
    }
    
    this.render(map, false)
  }

  protected static characterToAnimation(character: string): Animation {
    const line = [character, character, character, character]
    return new Animation([[line, line, line, line]])
  }
  
  protected static tileToTileDetail(tile: Tile, _surrounding: SurroundingTiles): TileDetail | null {
    const detail = new TileDetail(tile, '#000000', new Animation([]))
    switch(true) {
      case tile == TILE_BOUNDARY:
        detail.animation = this.characterToAnimation('-')
      break;
      case tile == TILE_SIDE:
        detail.animation = this.characterToAnimation('|')
      break;
      case tile == TILE_EXIT: 
        detail.colour = '#3b2a15'
        detail.animation = new Animation([
          [
            '^  ^'.split(''),
            '#/\\#'.split(''),
            '/  \\'.split(''),
            '|  |'.split('')
          ],
          [
            'w  w'.split(''),
            '#/\\#'.split(''),
            '/  \\'.split(''),
            '|  |'.split('')
          ]
        ])
      break
    }
    return detail
  }
}
