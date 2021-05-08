import { Animation } from "../animation";
import { Lemming } from "../lemming";
import { SurroundingTiles, TILE_AIR } from "../map";
import { LemmingAction } from "./lemmingAction";
import { Walk } from "./walk";

export class ClimberAnimation extends Animation {
  constructor() { super([[['l']], [['c']]]) }
}

export class Climb extends LemmingAction {
  constructor() {
    super(new ClimberAnimation())
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
      lemming.position.x += lemming.movingRight ? 1 : -1
      lemming.action = new Walk()
    } else if (this.hasHitCeiling(surroundingTiles)) {
      lemming.movingRight = !lemming.movingRight
      if (this.isFalling(surroundingTiles)) {
        this.handleFalling(lemming)
      }
    } else {
      lemming.position.y--
    }
  }
  
  public label(): string {
    return 'Climber'
  }
}
