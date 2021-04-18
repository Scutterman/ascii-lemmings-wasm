import { Vec2 } from "../position"
import { LemmingGift, LevelTiles } from "../types"
import { UIControl } from "../ui/uiControl"
import { UILabel } from "../ui/uiLabel"

export abstract class BaseLevel {
  public numberOfLemmings: u8
  public numberOfLemmingsForSuccess: u8
  public map: LevelTiles
  public timeLeft: u16 = 300
  public numberOfLemmingsSaved: u8 = 0
  public numberOfLemmingsRemoved: u8 = 0
  public uiControls: UIControl[] = []
  public uiLabels: UILabel[] = []
  public isMetaScreen: boolean
  public hasEnded: boolean = false

  public abstract processLemmingSelect(mouseTileX: i32, mouseTileY: i32, processLemmingClick: boolean): boolean
  public abstract updateLemmings(): void
  public abstract gameLoop(): boolean
  public abstract nuke(): void
  public abstract isBlockerInLocation(location: Vec2): boolean
  public abstract giveGiftToLemming(lemmingNumber: u8, gift: LemmingGift): void
  public abstract clone(): BaseLevel
  public abstract renderLevel(): void

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
    return Math.round(this.numberOfLemmingsSaved / (this.numberOfLemmings * 0.01)) as u8
  }
  
  public getLemmingNeededPercent(): u8 {
    return Math.round(this.numberOfLemmingsForSuccess / (this.numberOfLemmings * 0.01)) as u8
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
}
