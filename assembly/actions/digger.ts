import { currentLevel } from "..";
import { Animation } from "../animation";
import { Lemming } from "../lemming";
import { removeTerrain, SurroundingTiles, terrainIndestructible, TILE_BOUNDARY } from "../map";
import { Vec2 } from "../position";
import { LemmingAction } from "./lemmingAction";
import { Walk } from "./walk";

export class Digger extends LemmingAction {
  constructor() {
    super(new Animation([[['D']]]))
  }
  
  update(lemming: Lemming, surroundingTiles: SurroundingTiles): void {
    if (this.isFalling(surroundingTiles)) {
      this.handleFalling(lemming)
    } else if (terrainIndestructible(surroundingTiles.bottomCentre)) {
      lemming.action = new Walk()
    } else {
      removeTerrain(currentLevel.map, new Vec2(lemming.position.x, lemming.position.y + 1))
      lemming.position.y++
    }
  }
  
  public label(): string {
    return 'Digger'
  }
}
