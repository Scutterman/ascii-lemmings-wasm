import { Animation } from "../animation";
import { Lemming } from "../lemming";
import { SurroundingTiles } from "../map";
import { LemmingAction } from "./lemmingAction"
import { Walk } from "./walk";

const fallAnimation = new Animation([[['Y'], ['T']]])

export class Fall extends LemmingAction {
  constructor() {
    super(fallAnimation)
  }
  
  public update(lemming: Lemming, surroundingTiles: SurroundingTiles): void {
    if (this.isFalling(surroundingTiles)) {
      this.handleFalling(lemming)
    } else {
      lemming.action = new Walk()
    }
  }
}