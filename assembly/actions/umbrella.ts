import { Animation } from "../animation";
import { Lemming } from "../lemming";
import { SurroundingTiles } from "../map";
import { LemmingAction } from "./lemmingAction";
import { Walk } from "./walk";

export const BLOCKS_FALLEN_BEFORE_UMBRELLA: u8 = 4
export const FRAMES_BETWEEN_FALLING: u16 = 2

export class Umbrella extends LemmingAction {
  private framesSinceFall: u16 = 0
  constructor() {
    super(new Animation([[['U']]]))
  }

  update(lemming: Lemming, surroundingTiles: SurroundingTiles): void {
    if (!this.isFalling(surroundingTiles)) {
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