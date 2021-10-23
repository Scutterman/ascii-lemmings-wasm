import { Animation, Direction } from "../animation";
import { Lemming } from "../lemming";
import { getTileDetailInDirection, removeTerrainFromDirection, terrainIndestructible, TILE_AIR } from "../map";
import { Vec2 } from "../position";
import { LemmingAction } from "./lemmingAction";
import { Walk } from "./walk";

export class DiggerAnimation extends Animation {
  constructor() { super([[['D']]]) }
}

export class Digger extends LemmingAction {
  constructor(facing: Direction) {
    super('LEMMING_DIG', facing)
  }
  
  update(lemming: Lemming): void {
    if (this.isFalling(lemming.position)) {
      this.handleFalling(lemming)
    } else if (!this.canMineDown(lemming)) {
      lemming.action = new Walk(lemming.facingDirection)
    } else {
      // TODO:: this assumes the size of the texture to be 2x2
      removeTerrainFromDirection(lemming.position, Direction.Down)
      removeTerrainFromDirection(lemming.position, Direction.Down | Direction.Left)
      lemming.addDeltaToPosition(0, 1)
    }
  }

  private canMineDown(lemming: Lemming): boolean {
    const below = getTileDetailInDirection(lemming.position, Direction.Down)
    const belowLeft = getTileDetailInDirection(lemming.position, Direction.Down | Direction.Left)
    if (below == null || belowLeft == null || (below.tile == TILE_AIR && belowLeft.tile == TILE_AIR)) {
      return false
    }
    
    return !terrainIndestructible(below.animation, Direction.Down) &&
      !terrainIndestructible(belowLeft.animation, Direction.Down)
  }
  
  public label(): string {
    return 'Digger'
  }
}
