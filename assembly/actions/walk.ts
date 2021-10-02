import { Animation, Direction } from "../animation";
import { Lemming } from "../lemming";
import { getTileInDirection, isWalkingDownStairs, TILE_AIR, TILE_BRICK, TILE_EXIT } from "../map";
import { Vec2 } from "../position";
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
      const pos = lemming.position
      pos.x += lemming.facingDirection == Direction.Right ? 1 : -1
      pos.y += tile != TILE_AIR ? -1 : isStairs ? 1 : 0
      lemming.position = pos
    }
  }

  public label(): string {
    return 'Walker'
  }

  private canWalkOnNextTile(lemming: Lemming): boolean {
    const tileForward = getTileInDirection(lemming.position, lemming.facingDirection)
    const tileForwardAbove = getTileInDirection(lemming.position, lemming.facingDirection | Direction.Up)
    const tileForwardTwoAbove = getTileInDirection(new Vec2(lemming.position.x, lemming.position.y - 2), lemming.facingDirection)

    return (tileForward == TILE_AIR && (tileForwardAbove == TILE_AIR || tileForwardAbove == TILE_BRICK)) ||
      (tileForward != TILE_AIR && tileForwardAbove == TILE_AIR && tileForwardTwoAbove == TILE_AIR)
  }
}
