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
  constructor() {
    super(new BasherAnimation())
  }
  
  update(lemming: Lemming): void {
    if (this.isFalling(lemming.position)) {
      this.handleFalling(lemming)
    } else if (this.canMineTile(lemming)) {

      const xDelta: i16 = lemming.facingDirection == Direction.Right ? 1 : -1
      const pos = lemming.position
      pos.x += xDelta
      removeTerrain(new Vec2(pos.x, pos.y), lemming.facingDirection)
      removeTerrain(new Vec2(pos.x, pos.y - 1), lemming.facingDirection)
      lemming.position = pos
    } else {
      lemming.action = new Walk()
    }
  }

  public label(): string {
    return 'Basher'
  }

  private canMineTile(lemming: Lemming): boolean {
    const side = getTileDetailInDirection(lemming.position, lemming.facingDirection)
    const above = getTileDetailInDirection(lemming.position, lemming.facingDirection | Direction.Up)
    if (side == null || above == null || (side.tile == TILE_AIR && above.tile == TILE_AIR)) {
      return false
    }
    
    return !terrainIndestructible(side.animation, lemming.facingDirection)
      && !terrainIndestructible(above.animation, lemming.facingDirection)

  }
}
