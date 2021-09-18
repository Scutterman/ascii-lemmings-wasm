import { Animation, Direction } from "../animation";
import { Lemming } from "../lemming";
import { getTileInDirection, isWalkingDownStairs, TILE_AIR, TILE_BRICK, TILE_EXIT } from "../map";
import { LemmingAction } from "./lemmingAction"

export class WalkerAnimation extends Animation {
  constructor() { super([[['k']], [['l']]]) }
}

export class Walk extends LemmingAction {
  constructor() {
    super(new WalkerAnimation())
  }
  
  update(lemming: Lemming): void {
    if (this.isFalling(lemming.position)) {
      this.handleFalling(lemming)
    } else if (getTileInDirection(lemming.position, lemming.facingDirection) == TILE_EXIT) {
      lemming.exited = true
      lemming.removeFromGame()
    } else if (!this.canWalkOnNextTile(lemming)) {
      if (lemming.isClimber) {
        this.handleClimbing(lemming)
      } else {
        lemming.turnAround()
      }
    } else {
      const tile = getTileInDirection(lemming.position, lemming.facingDirection)
      const isStairs = isWalkingDownStairs(lemming)
      lemming.position.x += lemming.facingDirection == Direction.Right ? 1 : -1
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

  private canWalkOnNextTile(lemming: Lemming): boolean {
    const tile = getTileInDirection(lemming.position, lemming.facingDirection)
    return tile == TILE_BRICK ? this.canWalkOnBrickTile(lemming) : tile == TILE_AIR
  }

  private canWalkOnBrickTile(lemming: Lemming): boolean {
    const tile = getTileInDirection(lemming.position, lemming.facingDirection | Direction.Up)
    return tile == TILE_AIR
  }
}