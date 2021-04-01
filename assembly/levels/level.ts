import { gameState } from ".."
import { Lemming } from "../lemming"
import { clearScreen, renderTimer, renderToScreen } from "../loop"
import { LevelTiles } from "../types"
import { BaseLevel } from "./baseLevel"
import { getSurroundingTiles } from "../map"
import { insertText } from "../text"
import { UIControl } from "../UIControl"
import { Vec2 } from "../position"

// const setNoGift = (): void => {
//   gameState.selectedGift = LemmingGift.None
// }

// const setClimbingBootsGift = (): void => {
//   gameState.selectedGift = LemmingGift.ClimbingBoots
// }

// const setUmbrellaGift = (): void => {
//   gameState.selectedGift = LemmingGift.Umbrella
// }

// const setBombGift = (): void => {
//   gameState.selectedGift = LemmingGift.Bomb
// }

export class Level extends BaseLevel {
  public lemmings: Lemming[] = []
  constructor(lemmingsToSpawn: u8, numberOfLemmingsForSucces: u8, map: LevelTiles, isMetaScreen: boolean = false) {
    super(lemmingsToSpawn, numberOfLemmingsForSucces, map, isMetaScreen)
    this.uiControls.push(new UIControl(new Vec2(1, 14), "Restart", () => {
      gameState.restartLastLevel()
    }))
    // if (!this.isMetaScreen) {
      // this.makeButton(1, 14, 'C', () => setClimbingBootsGift())
      //this.makeButton(4, 14, 'U', () => gameState.setUmbrellaGift())
      // this.makeButton(7, 14, '*', () => setBombGift())
      // this.makeButton(10, 14, 'T', () => setClimbAction())
      // this.makeButton(13, 14, '/', () => setClimbAction())
      // this.makeButton(16, 14, 'B', () => setClimbAction())
      // this.makeButton(19, 14, '\\', () => setClimbAction())
      // this.makeButton(22, 14, 'D', () => setClimbAction())
      // }
  }

  public gameLoop(): void {
    this.timeLeft--
    const lemmingsLeftToSpawn = this.lemmings.length < (this.numberOfLemmings as i32)
    const allLemmingsRemoved = !lemmingsLeftToSpawn && this.numberOfLemmingsRemoved == this.numberOfLemmings
  
    if (allLemmingsRemoved || this.timeLeft == 0) {
      gameState.endLevel()
      return
    } else if (lemmingsLeftToSpawn) {
      if (gameState.framesSinceLastLemming >= gameState.framesBetweenLemmingSpawns) {
        this.lemmings.push(new Lemming())
        gameState.framesSinceLastLemming = 0
      } else {
        gameState.framesSinceLastLemming++
      }
    }
  
    this.renderLevel()
  }

  public updateLemmings(): void {
    for (let i = 0; i < this.lemmings.length; i++) {
      if (this.lemmings[i].removed) { continue }
      this.lemmings[i].update(getSurroundingTiles(this.map, this.lemmings[i].position))
      if (this.lemmings[i].exited) {
        this.numberOfLemmingsSaved++
      }

      if (this.lemmings[i].removed) {
        this.numberOfLemmingsRemoved++
      }
    }
  }
  
  public renderLevel(): void {
    const map = this.cloneMap()
    for (let i = 0; i < this.lemmings.length; i++) {
      const lemming = this.lemmings[i]
      if (lemming.removed) { continue }
      map[lemming.position.y][lemming.position.x] = lemming.renderFrame()
    }
    
    const rightmostColumn = this.render(map)
    renderTimer(rightmostColumn, this.timeLeft)
  }

  public clone(): Level {
    return new Level(this.numberOfLemmings, this.numberOfLemmingsForSucces, this.map, this.isMetaScreen)
  }
  
  private padRows(totalRows: i32, usedRows: i32): void {
    gameState.lastRowPadding = 0
    for (var i = totalRows; i > usedRows; i -= 2) {
      gameState.lastRowPadding++
      renderToScreen('')
    }
  }

  private padColumn(totalColumns: i32, text: string): string {
    const charactersSpare = totalColumns - text.length
    const charactersRequiredOnLeft = Math.floor(charactersSpare / 2) as i32
    gameState.lastColumnPadding = charactersRequiredOnLeft
    return ' '.repeat(charactersRequiredOnLeft) + text
  }

  protected render(map: LevelTiles): i32 {
    const totalColumns = gameState.screenWidth / gameState.characterWidth
    const totalRows = gameState.screenHeight / gameState.characterHeight
    const usedRows = map.length

    for (let i = 0; i < this.uiControls.length; i++) {
      insertText(map, this.uiControls[i].getText(), this.uiControls[i].getPosition())
    }
    
    clearScreen()
    this.padRows(totalRows, usedRows)
    let rightmostColumn: i32 = 0
    for (let i = 0; i < map.length; i++) {
      const column = this.padColumn(totalColumns, map[i].join(''))
      rightmostColumn = Math.max(rightmostColumn, column.length) as i32
      renderToScreen(column);
    }

    return rightmostColumn
  }
}
