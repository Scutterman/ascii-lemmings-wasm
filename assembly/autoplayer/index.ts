import { currentLevel, gameState, loadLevel } from ".."
import { Lemming } from "../lemming"
import { BaseLevel } from "../levels/baseLevel"
import { LemmingGift } from "../types"

export class AutoAction {
  constructor(public lemmingNumber: u8, public action: LemmingGift) {}
}

export abstract class AutoPlayer {
  protected frameNumber: u32 = 0
  
  // TODO:: Assemblyscript doesn't like reference to the concrete Level class here.
  // There might be a circular dependency
  constructor(level: BaseLevel, protected actions: Map<u32, AutoAction[]>) {
    loadLevel(level)
  }

  public update(): void {
    this.frameNumber++
    if (this.actions.has(this.frameNumber)) {
      const level = currentLevel
      const actions = this.actions.get(this.frameNumber)
      for (let i = 0; i < actions.length; i++) {
        if (actions[i].action == LemmingGift.Nuke) {
          gameState.setNukeGift()
          gameState.setNukeGift()
        } else {
          level.giveGiftToLemming(actions[i].lemmingNumber, actions[i].action)
        }
      }
    }
  }

  public reset(): void {
    this.frameNumber = 0
  }

  public abstract onLemmingSpawn(lemming: Lemming): void
}
