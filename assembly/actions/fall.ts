import { Animation } from "../animation";
import { Lemming } from "../lemming";
import { SurroundingTiles } from "../map";
import { LemmingAction } from "./lemmingAction"
import { Walk } from "./walk";
import { BLOCKS_FALLEN_BEFORE_UMBRELLA, Umbrella } from './umbrella'

export class FallerAnimation extends Animation {
  constructor() { super([[['Y']], [['T']]]) }
}

export class Fall extends LemmingAction {
  private blocksFallen: u8 = 0

  constructor() {
    super(new FallerAnimation())
  }
  
  public update(lemming: Lemming, surroundingTiles: SurroundingTiles): void {
    if (this.isFalling(surroundingTiles)) {
      if (lemming.hasUmbrella && this.blocksFallen >= BLOCKS_FALLEN_BEFORE_UMBRELLA) {
        lemming.action = new Umbrella()
        lemming.action.update(lemming, surroundingTiles)
      } else {
        this.handleFalling(lemming, false)
        this.blocksFallen++
      }
    } else {
      if (this.blocksFallen >= 16) {
        lemming.removed = true
      } else {
        lemming.action = new Walk()
      }
    }
  }
  
  public label(): string {
    return 'Falling'
  }
}