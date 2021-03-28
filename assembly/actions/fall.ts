import { Animation } from "../animation";
import { Lemming } from "../lemming";
import { SurroundingTiles } from "../map";
import { LemmingAction } from "./lemmingAction"
import { Walk } from "./walk";

export class Fall extends LemmingAction {
  constructor() {
    super(new Animation([[['Y']], [['T']]]))
  }
  
  public update(lemming: Lemming, surroundingTiles: SurroundingTiles): void {
    if (this.isFalling(surroundingTiles)) {
      this.handleFalling(lemming, false)
    } else {
      lemming.action = new Walk()
    }
  }
}