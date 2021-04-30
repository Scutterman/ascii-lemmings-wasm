import { BOUNDARIES_X, BOUNDARIES_Y, CONTROLS_Y, mapToTiles, VISIBLE_X, VISIBLE_Y } from "../map"
import { Vec2 } from "../position"
import { renderPanel, renderUiLabel } from "../loop"
import { LemmingGift, LevelTiles } from "../types"
import { UIControl } from "../ui/uiControl"
import { UILabel } from "../ui/uiLabel"
import { Panel } from "../ui/panel"

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
  public map: LevelTiles
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
  protected abstract render(map: LevelTiles, isRenderingGameSection: boolean): void

  public abstract canUseSkill(skill: LemmingGift): boolean
  public abstract skillUsed(skill: LemmingGift): void
  public abstract skillSelected(skill: LemmingGift): void
  
  constructor(public tag: string, lemmingsToSpawn: u8, numberOfLemmingsForSucces: u8, map: LevelTiles, isMetaScreen: boolean = false) {
    this.numberOfLemmings = lemmingsToSpawn
    this.numberOfLemmingsForSuccess = numberOfLemmingsForSucces
    this.map = map
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
  
  protected cloneMap(): LevelTiles {
    const mapClone: LevelTiles = []
    for (let i = 0; i < this.map.length; i++) {
      for (let j = 0; j < this.map[i].length; j++) {
        if (j == 0) { mapClone[i] = [] }
        mapClone[i].push(this.map[i][j])
      }
    }
    return mapClone
  }

  protected updateLabel(tag: string, newText: string): void {
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
    
    return null
  }

  private fillMap(x: u16, y: u16): LevelTiles {
    let map: LevelTiles = []
    for (let i: u16 = 0; i < y; i++) { map.push(' '.repeat(x).split('')) }
    return map
  }

  protected renderControls(): void {
    let maxY: u16 = VISIBLE_Y + CONTROLS_Y + BOUNDARIES_Y
    let maxX: u16 = VISIBLE_X + BOUNDARIES_X
    
    let map = this.fillMap(maxX, maxY)
    const delta = map.length - buttonArea.length

    if (!this.isMetaScreen) {
      for (let buttonAreaRow = 0; buttonAreaRow < buttonArea.length; buttonAreaRow++) {
        for (let buttonAreaColumn = 0; buttonAreaColumn < buttonArea[buttonAreaRow].length; buttonAreaColumn++) {
          map[delta + buttonAreaRow][buttonAreaColumn] = buttonArea[buttonAreaRow][buttonAreaColumn]
        }
      }
    }

    for (let i = 0; i < this.uiControls.length; i++) {
      if (this.uiControls[i].isVisible(map)) {
        renderUiLabel(this.uiControls[i])
      }
    }

    for (let i = 0; i < this.uiLabels.length; i++) {
      if (this.uiLabels[i].isVisible(map)) {
        renderUiLabel(this.uiLabels[i])
      }
    }

    for (let i = 0; i < this.uiPanels.length; i++) {
      renderPanel(this.uiPanels[i], map)
    }
    
    this.render(map, false)
  }
}
