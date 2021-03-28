import { Animation } from "../animation";
import { Lemming } from "../lemming";
import { SurroundingTiles, TILE_AIR, TILE_EXIT } from "../map";
import { Climb } from "./climb";
import { LemmingAction } from "./lemmingAction"

export class Walk extends LemmingAction {
  constructor() {
    super(new Animation([[['k']], [['l']]]))
  }
  
  public update(lemming: Lemming, surroundingTiles: SurroundingTiles): void {
    if (this.isFalling(surroundingTiles)) {
      this.handleFalling(lemming)
    } else if ((!lemming.movingRight && surroundingTiles.left == TILE_EXIT) || (lemming.movingRight && surroundingTiles.right == TILE_EXIT)) {
      lemming.exited = true
      lemming.removed = true
    } else if ((!lemming.movingRight && surroundingTiles.left != TILE_AIR) || (lemming.movingRight && surroundingTiles.right != TILE_AIR)) {
      if (lemming.isClimber) {
        lemming.action = new Climb()
      } else {
        lemming.movingRight = !lemming.movingRight
      }
    } else {
      lemming.position.x += 1 * (lemming.movingRight ? 1 : -1)
    }
  }
}