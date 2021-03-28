import { Animation } from "../animation";
import { Lemming } from "../lemming";
import { SurroundingTiles } from "../map";
import { LemmingAction } from "./lemmingAction";
import { Walk } from "./walk";

export const BLOCKS_FALLEN_BEFORE_UMBRELLA: u8 = 2

export class Umbrella extends LemmingAction {
  constructor() {
    super(new Animation([[['U']]]))
  }

  update(lemming: Lemming, surroundingTiles: SurroundingTiles): void {
    if (!this.isFalling(surroundingTiles)) {
      lemming.action = new Walk()
    } else {
      this.handleFalling(lemming, false)
    }
  }
}