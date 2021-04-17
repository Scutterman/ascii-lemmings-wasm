import { Animation } from "../animation";
import { Lemming } from "../lemming";
import { isWalkingDownStairs, SurroundingTiles, TILE_AIR, TILE_BRICK, TILE_EXIT } from "../map";
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
        this.handleClimbing(lemming)
      } else {
        lemming.movingRight = !lemming.movingRight
      }
    } else {
      const tile: string = lemming.movingRight ? surroundingTiles.right : surroundingTiles.left
      const isStairs = isWalkingDownStairs(lemming)
      lemming.position.x += lemming.movingRight ? 1 : -1
      if (tile == TILE_BRICK) {
        lemming.position.y--
      } else if (isStairs) {
        lemming.position.y++
      }
    }
  }
  
  public label(): string {
    return 'Walker'
  }

  private canWalkOnNextTile(lemming: Lemming, surroundingTiles: SurroundingTiles): boolean {
    const tile: string = lemming.movingRight ? surroundingTiles.right : surroundingTiles.left
    return tile == TILE_BRICK ? this.canWalkOnBrickTile(lemming, surroundingTiles) : tile == TILE_AIR
  }

  private canWalkOnBrickTile(lemming: Lemming, surroundingTiles: SurroundingTiles): boolean {
    const tile: string = lemming.movingRight ? surroundingTiles.topRight : surroundingTiles.topLeft
    return tile == TILE_AIR
  }
}