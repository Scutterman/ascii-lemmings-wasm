import { Animation, Direction } from "../animation";
import { Lemming } from "../lemming";
import { getTileDetailInDirection, removeTerrain, terrainIndestructible, TILE_AIR } from "../map";
import { Vec2 } from "../position";
import { LemmingAction } from "./lemmingAction";
import { Walk } from "./walk";

export class MinerAnimation extends Animation {
  constructor() { super([[['\\']]]) }
}

export class Miner extends LemmingAction {
  constructor(facing: Direction) {
    super('LEMMING_MINE', facing)
  }
  
  update(lemming: Lemming): void {
    if (this.canMineNextTile(lemming)) {
      const xDelta: i16 = lemming.facingDirection == Direction.Right ? 1 : -1
      const pos = lemming.positionBasedOnFacingDirection
      
      removeTerrain(pos, lemming.facingDirection)
      pos.y++
      removeTerrain(pos, Direction.Down)
      pos.x += xDelta
      removeTerrain(pos, Direction.Down | lemming.facingDirection)
      pos.x += xDelta
      removeTerrain(pos, Direction.Down | lemming.facingDirection)
      
      lemming.addDeltaToPosition(xDelta, 1)
    } else {
      lemming.action = new Walk(lemming.facingDirection)
    }
  }
  
  public label(): string {
    return 'Miner'
  }

  private canMineNextTile(lemming: Lemming): boolean {
    const xDelta: i16 = lemming.facingDirection == Direction.Right ? 1 : -1
    const pos = lemming.positionBasedOnFacingDirection
    
    pos.x += xDelta
    const below = getTileDetailInDirection(pos, Direction.Down)
    pos.x += xDelta
    const below2 = getTileDetailInDirection(pos, Direction.Down)

    if (below == null || below2 == null || (below.tile == TILE_AIR && below2.tile == TILE_AIR)) {
      return false
    }

    return !terrainIndestructible(below.animation, lemming.facingDirection) &&
      !terrainIndestructible(below2.animation, lemming.facingDirection)
  }
}