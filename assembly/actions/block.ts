import { Animation } from "../animation";
import { Lemming } from "../lemming";
import { SurroundingTiles } from "../map";
import { LemmingAction } from "./lemmingAction";
import { Walk } from "./walk";

export class BlockerAnimation extends Animation {
  constructor() { super([[['T']]]) }
}

export class Block extends LemmingAction {
  constructor() {
    super(new BlockerAnimation())
  }
  
  update(lemming: Lemming, surroundingTiles: SurroundingTiles): void {
    if (this.isFalling(surroundingTiles)) {
      lemming.action = new Walk()
    }
  }

  public label(): string {
    return 'Blocker'
  }
}