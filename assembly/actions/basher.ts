import { Animation, Direction } from "../animation";
import { Lemming } from "../lemming";
import { getTileDetailInDirection, removeTerrain, terrainIndestructible, TILE_AIR } from "../map";
import { Vec2 } from "../position";
import { LemmingAction } from "./lemmingAction";
import { Walk } from "./walk";

export class BasherAnimation extends Animation {
  constructor() { super([[['B']]]) }
}

export class Basher extends LemmingAction {
  constructor(facing: Direction) {
    super('LEMMING_BASH', facing)
  }
  
  update(lemming: Lemming): void {
    if (this.isFalling(lemming.position)) {
      this.handleFalling(lemming)
    } else if (this.canMineTile(lemming)) {

      const xDelta: i16 = lemming.facingDirection == Direction.Right ? 1 : -1
      const pos = lemming.positionBasedOnFacingDirection
      pos.x += xDelta
      removeTerrain(new Vec2(pos.x, pos.y), lemming.facingDirection)
      removeTerrain(new Vec2(pos.x, pos.y - 1), lemming.facingDirection)
      lemming.addDeltaToPosition(xDelta, 0)
    } else {
      lemming.action = new Walk(lemming.facingDirection)
    }
  }

  public label(): string {
    return 'Basher'
  }

  private canMineTile(lemming: Lemming): boolean {
    const side = getTileDetailInDirection(lemming.positionBasedOnFacingDirection, lemming.facingDirection)
    const above = getTileDetailInDirection(lemming.positionBasedOnFacingDirection, lemming.facingDirection | Direction.Up)
    if (side == null || above == null || (side.tile == TILE_AIR && above.tile == TILE_AIR)) {
      return false
    }
    
    return !terrainIndestructible(side.animation, lemming.facingDirection)
      && !terrainIndestructible(above.animation, lemming.facingDirection)

  }
}
