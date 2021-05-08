import { currentLevel } from "..";
import { Animation } from "../animation";
import { Lemming } from "../lemming";
import { removeTerrain, SurroundingTiles, terrainIndestructible, TILE_AIR, TILE_BOUNDARY, TILE_SIDE } from "../map";
import { Vec2 } from "../position";
import { LemmingAction } from "./lemmingAction";
import { Walk } from "./walk";

export class MinerAnimation extends Animation {
  constructor() { super([[['\\']]]) }
}

export class Miner extends LemmingAction {
  constructor() {
    super(new MinerAnimation())
  }
  
  update(lemming: Lemming, surroundingTiles: SurroundingTiles): void {
    if (this.isFalling(surroundingTiles)) {
      this.handleFalling(lemming)
    } else if (this.canMineNextTile(lemming, surroundingTiles)) {
      const xDelta: i16 = lemming.movingRight ? 1 : -1
      removeTerrain(currentLevel.map, new Vec2(lemming.position.x, lemming.position.y + 1))
      removeTerrain(currentLevel.map, new Vec2(lemming.position.x + xDelta, lemming.position.y + 1))
      lemming.position.x += xDelta
      lemming.position.y ++
    } else {
      lemming.action = new Walk()
    }
  }
  
  public label(): string {
    return 'Miner'
  }

  private canMineNextTile(lemming: Lemming, surroundingTiles: SurroundingTiles): boolean {
    const tile: string = lemming.movingRight ? surroundingTiles.bottomRight : surroundingTiles.bottomLeft
    return terrainIndestructible(tile) == false
  }
}