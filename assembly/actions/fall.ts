import { Animation } from "../animation";
import { Lemming } from "../lemming";
import { LemmingActionPatch } from "./lemmingAction"
import { Walk } from "./walk";
import { BLOCKS_FALLEN_BEFORE_UMBRELLA, Umbrella } from './umbrella'

export class FallerAnimation extends Animation {
  constructor() { super([[['Y']], [['T']]]) }
}

export class Fall extends LemmingActionPatch {
  private blocksFallen: u8 = 0

  constructor() {
    super("LEMMING_FALL")
  }
  
  update(lemming: Lemming): void {
    if (this.isFalling(lemming.position)) {
      if (lemming.hasUmbrella && this.blocksFallen >= BLOCKS_FALLEN_BEFORE_UMBRELLA) {
        lemming.action = new Umbrella()
        lemming.action.update(lemming)
      } else {
        this.handleFalling(lemming, false)
        this.blocksFallen++
      }
    } else {
      if (this.blocksFallen >= 16) {
        lemming.removeFromGame()
      } else {
        lemming.action = new Walk()
      }
    }
  }
  
  public label(): string {
    return 'Falling'
  }
}