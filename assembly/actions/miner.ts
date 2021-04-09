import { gameState } from "..";
import { Animation } from "../animation";
import { Lemming } from "../lemming";
import { removeTerrain, SurroundingTiles, terrainIndestructible, TILE_AIR, TILE_BOUNDARY, TILE_SIDE } from "../map";
import { Vec2 } from "../position";
import { LemmingAction } from "./lemmingAction";
import { Walk } from "./walk";

export class Miner extends LemmingAction {
  constructor() {
    super(new Animation([[['\\']]]))
  }
  
  update(lemming: Lemming, surroundingTiles: SurroundingTiles): void {
    if (this.isFalling(surroundingTiles)) {
      this.handleFalling(lemming)
    } else if (this.canMineNextTile(lemming, surroundingTiles)) {
      const xDelta: i16 = lemming.movingRight ? 1 : -1
      removeTerrain(gameState.currentLevel.map, new Vec2(lemming.position.x, lemming.position.y + 1))
      removeTerrain(gameState.currentLevel.map, new Vec2(lemming.position.x + xDelta, lemming.position.y + 1))
      lemming.position.x += xDelta
      lemming.position.y ++
    } else {
      lemming.action = new Walk()
    }
  }

  private canMineNextTile(lemming: Lemming, surroundingTiles: SurroundingTiles): boolean {
    const tile: string = lemming.movingRight ? surroundingTiles.bottomRight : surroundingTiles.bottomLeft
    return terrainIndestructible(tile) == false
  }
}