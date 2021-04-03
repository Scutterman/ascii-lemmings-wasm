import { Animation } from "../animation";
import { Lemming } from "../lemming";
import { SurroundingTiles, TILE_AIR, TILE_BRICK, TILE_EXIT } from "../map";
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
    } else if (this.canWalkOnNextTile(lemming, surroundingTiles) == false) {
      if (lemming.isClimber) {
        lemming.action = new Climb()
      } else {
        lemming.movingRight = !lemming.movingRight
      }
    } else {
      const tile: string = lemming.movingRight ? surroundingTiles.right : surroundingTiles.left
      lemming.position.x += lemming.movingRight ? 1 : -1
      if (tile == TILE_BRICK) {
        lemming.position.y -= 1
      }
    }
  }

  // TODO:: lemmings can walk through brick tiles if they're walking opposite to the brick direction
  // Maybe use / for BRICK_RIGHT and \ for BRICK_LEFT?
  private canWalkOnNextTile(lemming: Lemming, surroundingTiles: SurroundingTiles): boolean {
    const tile: string = lemming.movingRight ? surroundingTiles.right : surroundingTiles.left
    return tile == TILE_BRICK ? this.canWalkOnBrickTile(lemming, surroundingTiles) : tile == TILE_AIR
  }

  private canWalkOnBrickTile(lemming: Lemming, surroundingTiles: SurroundingTiles): boolean {
    const tile: string = lemming.movingRight ? surroundingTiles.topRight : surroundingTiles.topLeft
    return tile == TILE_AIR
  }
}