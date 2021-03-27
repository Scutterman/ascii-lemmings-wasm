import { EndSlate } from "./levels/endSlate"
import { Level, LevelState } from "./levels/level"
import { render } from './loop'

export const baseMillisecondsPerGameLoop: u16 = 100 as u16
export const fastForwardMultiplier: u8 = 2 as u8

const defaultLevel = new Level(0, 0, [])

export class GameState {
  public shouldRun: boolean = false
  public levelState: LevelState = LevelState.TitleScreen
  public lastGameLoopRunTime: i64 = Date.now()
  public fastForward: boolean = false
  public millisecondsPerGameLoop: u16 = baseMillisecondsPerGameLoop
  public releaseRate: u8 = 50
  public minimumReleaseRate: u8 = 50
  public currentLevel: Level = defaultLevel
  public screenWidth: i32 = 0
  public screenHeight: i32 = 0
  public characterWidth: i32 = 0
  public characterHeight: i32 = 0
  public mouseX: i32 = 0
  public mouseY: i32 = 0
  public mouseClicked: boolean = false
  public lastRowPadding: i32 = 0
  public lastColumnPadding: i32 = 0
  public lastLevel: Level = defaultLevel

  constructor () { }

  public canStart(): boolean {
    return (
      this.screenWidth > 0 &&
      this.screenHeight > 0 &&
      this.characterWidth > 0 &&
      this.characterHeight > 0
    )
  }

  public restartLastLevel(): void {
    this.currentLevel = this.lastLevel.clone()
    this.shouldRun = true
  }
  
  public toggleFastForward(): void {
    this.fastForward = !this.fastForward
    this.millisecondsPerGameLoop = baseMillisecondsPerGameLoop
    if (this.fastForward) {
      this.millisecondsPerGameLoop /= fastForwardMultiplier
    }
  }
  
  public loadLevel(newLevel: Level): void {
    if (!this.currentLevel.isMetaScreen) {
      this.lastLevel = this.currentLevel.clone()
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
    const endSlateToRender = endSlate.getEndScreen(needed, rescued)
  
    render(endSlateToRender, endSlate.uiControls)
  }
}
