import { BaseLevel } from "./levels/baseLevel"
import { DefaultLevel } from "./levels/defaultLevel"
import { EndSlate } from "./levels/endSlate"
import { LemmingGift, LevelState } from "./types"

export const baseMillisecondsPerGameLoop: u16 = 1000 as u16
export const fastForwardMultiplier: u8 = 2 as u8

const defaultLevel: DefaultLevel = new DefaultLevel()

export class GameState {
  public shouldRun: boolean = false
  public levelState: LevelState = LevelState.TitleScreen
  public lastGameLoopRunTime: i64 = Date.now()
  public fastForward: boolean = false
  public millisecondsPerGameLoop: u16 = baseMillisecondsPerGameLoop
  public releaseRate: u8 = 50
  public minimumReleaseRate: u8 = 50
  public currentLevel: BaseLevel = defaultLevel
  public screenWidth: i32 = 0
  public screenHeight: i32 = 0
  public characterWidth: i32 = 0
  public characterHeight: i32 = 0
  public mouseX: i32 = 0
  public mouseY: i32 = 0
  public mouseClicked: boolean = false
  public lastRowPadding: i32 = 0
  public lastColumnPadding: i32 = 0
  public lastLevel: BaseLevel = defaultLevel
  public framesSinceLastLemming: u16 = u16.MAX_VALUE
  public framesBetweenLemmingSpawns: u16 = 4
  public selectedGift: LemmingGift = LemmingGift.None

  public canStart(): boolean {
    return (
      this.screenWidth > 0 &&
      this.screenHeight > 0 &&
      this.characterWidth > 0 &&
      this.characterHeight > 0
    )
  }

  public setNoGift (): void {
    this.selectedGift = LemmingGift.None
  }

  public setClimbingBootsGift (): void {
    this.selectedGift = LemmingGift.ClimbingBoots
  }

  public setUmbrellaGift(): void {
    this.selectedGift = LemmingGift.Umbrella
  }

  public setBombGift (): void {
    this.selectedGift = LemmingGift.Bomb
  }

  public setBlockGift (): void {
    this.selectedGift = LemmingGift.Block
  }

  public setBrickSackGift (): void {
    this.selectedGift = LemmingGift.BrickSack
  }

  public setHammerGift (): void {
    this.selectedGift = LemmingGift.Hammer
  }

  public setPickaxeGift (): void {
    this.selectedGift = LemmingGift.Pickaxe
  }

  public setShovelGift (): void {
    this.selectedGift = LemmingGift.Shovel
  }

  public setNukeGift (): void {
    if (this.selectedGift == LemmingGift.Nuke) {
      this.currentLevel.nuke()
    } else {
      this.selectedGift = LemmingGift.Nuke
    }
  }

  private reset (): void {
    this.shouldRun = true
    this.lastGameLoopRunTime = Date.now()
    this.fastForward = false
    this.millisecondsPerGameLoop = baseMillisecondsPerGameLoop
    this.framesSinceLastLemming = u16.MAX_VALUE
    this.selectedGift = LemmingGift.None
  }

  public restartLastLevel(): void {
    this.currentLevel = this.lastLevel.clone()
    this.reset()
  }
  
  public toggleFastForward(): void {
    this.fastForward = !this.fastForward
    this.millisecondsPerGameLoop = baseMillisecondsPerGameLoop
    if (this.fastForward) {
      this.millisecondsPerGameLoop /= fastForwardMultiplier
    }
  }
  
  public loadLevel(newLevel: BaseLevel): void {
    if (!newLevel.isMetaScreen) {
      this.lastLevel = newLevel.clone()
    }
    
    this.currentLevel = newLevel
    this.levelState = LevelState.LevelRunning
    this.shouldRun = true
  }

  public endLevel(): void {
    this.shouldRun = false
    
    const needed = this.currentLevel.numberOfLemmingsForSucces.toString()
    const rescued = this.currentLevel.numberOfLemmingsSaved.toString()
    
    const endSlate = new EndSlate()
    this.loadLevel(endSlate)
    endSlate.renderEndScreen(needed, rescued)
  }
}
