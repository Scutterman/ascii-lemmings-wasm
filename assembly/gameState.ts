import { currentLevel, loadLevel } from "."
import { AutoPlayer } from "./autoplayer"
import { BaseLevel } from "./levels/baseLevel"
import { DefaultLevel } from "./levels/defaultLevel"
import { LemmingGift, LevelState } from "./types"
import { UIControl } from "./ui/uiControl"

export const baseMillisecondsPerGameLoop: u16 = 1000 as u16
export const fastForwardMultiplier: u8 = 2 as u8

const defaultLevel: DefaultLevel = new DefaultLevel()

export class GameState {
  public autoplayer: AutoPlayer | null = null

  public shouldRun: boolean = false
  public levelState: LevelState = LevelState.TitleScreen
  public lastGameLoopRunTime: i64 = Date.now()
  public lastRenderTime: i64 = 0
  public fastForward: boolean = false
  public millisecondsPerGameLoop: u16 = baseMillisecondsPerGameLoop
  public releaseRate: u8 = 50
  public minimumReleaseRate: u8 = 50
  public screenWidth: i32 = 0
  public screenHeight: i32 = 0
  public characterWidth: f32 = 0
  public characterHeight: f32 = 0
  public mouseTileX: i32 = 0
  public mouseTileY: i32 = 0
  public mouseClicked: boolean = false
  public lastRowPadding: i32 = 0
  public lastColumnPadding: i32 = 0
  public lastLevel: BaseLevel = defaultLevel
  public framesSinceLastLemming: u16 = u16.MAX_VALUE
  public framesBetweenLemmingSpawns: u16 = 4
  public selectedGift: LemmingGift = LemmingGift.None

  public focusedUiControl: UIControl | null = null

  public userEnteredText: string = ''

  public canStart(): boolean {
    return (
      this.screenWidth > 0 &&
      this.screenHeight > 0 &&
      this.characterWidth > 0 &&
      this.characterHeight > 0
    )
  }

  public setSelectedGift(gift: LemmingGift): void {
    if (currentLevel.canUseSkill(gift)) {
      this.selectedGift = gift
      currentLevel.skillSelected(gift)
    }
  }

  public setNukeGift (): void {
    if (this.selectedGift == LemmingGift.Nuke) {
      currentLevel.nuke()
    } else {
      this.selectedGift = LemmingGift.Nuke
      currentLevel.skillSelected(LemmingGift.Nuke)
    }
  }

  public reset (): void {
    this.shouldRun = true
    this.lastGameLoopRunTime = Date.now()
    this.lastRenderTime = Date.now()
    this.fastForward = false
    this.millisecondsPerGameLoop = baseMillisecondsPerGameLoop
    this.framesSinceLastLemming = u16.MAX_VALUE
    this.selectedGift = LemmingGift.None

    const player = this.autoplayer
    if (player != null) {
      player.reset()
    }
  }

  public restartLastLevel(): void {
    const level = this.lastLevel.clone()
    this.reset()
    loadLevel(level)
  }
  
  public toggleFastForward(): void {
    this.fastForward = !this.fastForward
    this.millisecondsPerGameLoop = baseMillisecondsPerGameLoop
    if (this.fastForward) {
      this.millisecondsPerGameLoop /= fastForwardMultiplier
    }
  }
}
