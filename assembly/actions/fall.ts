import { Animation, Direction } from "../animation";
import { Lemming } from "../lemming";
import { LemmingAction } from "./lemmingAction"
import { Walk } from "./walk";
import { BLOCKS_FALLEN_BEFORE_UMBRELLA, Umbrella } from './umbrella'

export class FallerAnimation extends Animation {
  constructor() { super([[['Y']], [['T']]]) }
}

export class Fall extends LemmingAction {
  private blocksFallen: u8 = 0

  constructor(facing: Direction) {
    super("LEMMING_FALL", facing)
  }
  
  update(lemming: Lemming): void {
    if (this.isFalling(lemming.position)) {
      if (lemming.hasUmbrella && this.blocksFallen >= BLOCKS_FALLEN_BEFORE_UMBRELLA) {
        lemming.action = new Umbrella(lemming.facingDirection)
        lemming.action.update(lemming)
      } else {
        this.handleFalling(lemming, false)
        this.blocksFallen++
      }
    } else {
      if (this.blocksFallen >= 16) {
        lemming.removeFromGame()
      } else {
        lemming.action = new Walk(lemming.facingDirection)
      }
    }
  }
  
  public label(): string {
    return 'Falling'
  }
}