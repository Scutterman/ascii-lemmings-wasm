import { Vec2 } from "../position"
import { LemmingGift, LevelTiles } from "../types"
import { UIControl } from "../UIControl"

export abstract class BaseLevel {
  public numberOfLemmings: u8
  public numberOfLemmingsForSucces: u8
  public map: LevelTiles
  public timeLeft: u16 = 300
  public numberOfLemmingsSaved: u8 = 0
  public numberOfLemmingsRemoved: u8 = 0
  public uiControls: UIControl[] = []
  public isMetaScreen: boolean

  public abstract processLemmingSelect(mouseTileX: i32, mouseTileY: i32): boolean
  public abstract updateLemmings(): void
  public abstract gameLoop(): void
  public abstract nuke(): void
  public abstract isBlockerInLocation(location: Vec2): boolean
  public abstract giveGiftToLemming(lemmingNumber: u8, gift: LemmingGift): void
  public abstract clone(): BaseLevel

  public abstract canUseSkill(skill: LemmingGift): boolean
  public abstract skillUsed(skill: LemmingGift): void
  
  constructor(lemmingsToSpawn: u8, numberOfLemmingsForSucces: u8, map: LevelTiles, isMetaScreen: boolean = false) {
    this.numberOfLemmings = lemmingsToSpawn
    this.numberOfLemmingsForSucces = numberOfLemmingsForSucces
    this.map = map
    this.isMetaScreen = isMetaScreen 
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
}