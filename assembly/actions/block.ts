import { Animation, Direction } from "../animation";
import { Lemming } from "../lemming";
import { LemmingAction } from "./lemmingAction";
import { Walk } from "./walk";

export class BlockerAnimation extends Animation {
  constructor() { super([[['T']]]) }
}

export class Block extends LemmingAction {
  constructor(facing: Direction) {
    super('LEMMING_BLOCK', facing)
  }
  
  update(lemming: Lemming): void {
    if (this.isFalling(lemming.position)) {
      lemming.action = new Walk(lemming.facingDirection)
    }
  }

  public label(): string {
    return 'Blocker'
  }
}