import { Animation, Direction } from "../animation";
import { Lemming } from "../lemming";
import { getTileInDirection, isWalkingDownStairs, TILE_AIR, TILE_BRICK, TILE_EXIT } from "../map";
import { Vec2 } from "../position";
import { LemmingAction } from "./lemmingAction"

export class WalkerAnimation extends Animation {
  constructor() { super([[['k']], [['l']]]) }
}

export class Walk extends LemmingAction {
  constructor(facing: Direction) {
    super("LEMMING_WALK", facing)
  }

  update(lemming: Lemming): void {
    if (this.isFalling(lemming.position)) {
      this.handleFalling(lemming)
    } else if (getTileInDirection(lemming.positionBasedOnFacingDirection, lemming.facingDirection) == TILE_EXIT) {
      const xDelta: i16 = lemming.facingDirection == Direction.Right ? 1 : -1
      lemming.addDeltaToPosition(xDelta, 0)
      lemming.exit()
    } else if (!this.canWalkOnNextTile(lemming)) {
      if (lemming.isClimber) {
        this.handleClimbing(lemming)
      } else {
        lemming.turnAround()
      }
    } else {
      const tile = getTileInDirection(lemming.positionBasedOnFacingDirection, lemming.facingDirection)
      const isStairs = isWalkingDownStairs(lemming)
      const xDelta: i16 = lemming.facingDirection == Direction.Right ? 1 : -1
      const yDelta: i16 = tile != TILE_AIR ? -1 : isStairs ? 1 : 0
      lemming.addDeltaToPosition(xDelta, yDelta)
    }
  }

  public label(): string {
    return 'Walker'
  }

  private canWalkOnNextTile(lemming: Lemming): boolean {
    const position = lemming.positionBasedOnFacingDirection
    const tileForward = getTileInDirection(position, lemming.facingDirection)
    const tileForwardAbove = getTileInDirection(position, lemming.facingDirection | Direction.Up)
    const tileForwardTwoAbove = getTileInDirection(new Vec2(position.x, position.y - 2), lemming.facingDirection)

    return (tileForward == TILE_AIR && (tileForwardAbove == TILE_AIR || tileForwardAbove == TILE_BRICK)) ||
      (tileForward != TILE_AIR && tileForwardAbove == TILE_AIR && tileForwardTwoAbove == TILE_AIR)
  }
}
