import { gameState } from ".."
import { BaseLevel } from "../levels/baseLevel"

export abstract class AutoPlayer {
  protected frameNumber: u32 = 0
  
  // TODO:: Assemblyscript doesn't like reference to the concrete Level class here.
  // There might be a circular dependency
  constructor(level: BaseLevel) {
    gameState.loadLevel(level)
  }

  abstract update(): void
  
  protected advanceFrame(): void {
    this.frameNumber++
  }
}
