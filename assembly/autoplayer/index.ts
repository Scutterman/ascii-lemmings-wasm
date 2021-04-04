import { gameState } from ".."
import { BaseLevel } from "../levels/baseLevel"

export abstract class AutoPlayer {
  protected frameNumber: u32 = 0
  
  constructor(level: BaseLevel) {
    gameState.loadLevel(level)
  }

  // TODO:: Assemblyscript doesn't like game state loading levels in the constructor
  abstract update(): void
  
  protected advanceFrame(): void {
    this.frameNumber++
  }
}
