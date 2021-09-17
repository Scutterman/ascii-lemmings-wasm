import { Animation } from "../animation";
import { Lemming } from "../lemming";
import { LemmingAction } from "./lemmingAction";
import { Walk } from "./walk";

export const BLOCKS_FALLEN_BEFORE_UMBRELLA: u8 = 4
export const FRAMES_BETWEEN_FALLING: u16 = 2

export class FloaterAnimation extends Animation {
  constructor() { super([[['U']]]) }
}

export class Umbrella extends LemmingAction {
  private framesSinceFall: u16 = 0
  constructor() {
    super(new FloaterAnimation())
  }

  update(lemming: Lemming): void {
    if (!this.isFalling(lemming.position)) {
      lemming.action = new Walk()
    } else if (this.framesSinceFall >= FRAMES_BETWEEN_FALLING) {
      this.framesSinceFall = 0
      this.handleFalling(lemming, false)
    } else {
      this.framesSinceFall++
    }
  }
  
  public label(): string {
    return 'Floater'
  }
}