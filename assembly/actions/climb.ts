import { Animation } from "../animation";
import { Lemming } from "../lemming";
import { SurroundingTiles, TILE_AIR } from "../map";
import { LemmingAction } from "./lemmingAction";
import { Walk } from "./walk";

export class Climb extends LemmingAction {
  constructor() {
    super(new Animation([[['l']], [['c']]]))
  }

  private hasHitCeiling(surroundingTiles: SurroundingTiles): boolean {
    return surroundingTiles.topCentre != TILE_AIR
  }
  
  private hasReachedOpening(surroundingTiles: SurroundingTiles, isFacingRight: boolean): boolean {
    return (
      (isFacingRight && surroundingTiles.right == TILE_AIR) ||
      (!isFacingRight && surroundingTiles.left == TILE_AIR)
    )
  }

  update(lemming: Lemming, surroundingTiles: SurroundingTiles): void {
    if (this.hasReachedOpening(surroundingTiles, lemming.movingRight)) {
      lemming.action = new Walk()
    } else if (this.hasHitCeiling(surroundingTiles)) {
      lemming.movingLeft = !lemming.movingLeft
      lemming.movingRight = !lemming.movingRight
      this.handleFalling(lemming)
    } else {
      lemming.position.y--
    }
  }
}
