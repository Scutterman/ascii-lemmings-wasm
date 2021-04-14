import { currentLevel } from "..";
import { Animation } from "../animation";
import { Lemming } from "../lemming";
import { removeTerrain, SurroundingTiles, terrainIndestructible } from "../map";
import { Vec2 } from "../position";
import { LemmingAction } from "./lemmingAction";
import { Walk } from "./walk";

export class Basher extends LemmingAction {
  constructor() {
    super(new Animation([[['B']]]))
  }
  
  update(lemming: Lemming, surroundingTiles: SurroundingTiles): void {
    if (this.isFalling(surroundingTiles)) {
      this.handleFalling(lemming)
    } else if (this.canMineNextTile(lemming, surroundingTiles)) {
      const xDelta: i16 = lemming.movingRight ? 1 : -1
      removeTerrain(currentLevel.map, new Vec2(lemming.position.x + xDelta, lemming.position.y))
      lemming.position.x += xDelta
    } else {
      lemming.action = new Walk()
    }
  }

  public label(): string {
    return 'Basher'
  }

  private canMineNextTile(lemming: Lemming, surroundingTiles: SurroundingTiles): boolean {
    const tile: string = lemming.movingRight ? surroundingTiles.right : surroundingTiles.left
    return terrainIndestructible(tile) == false
  }
}
