import { gameState } from "..";
import { Animation } from "../animation";
import { Lemming } from "../lemming";
import { removeTerrain, SurroundingTiles, TILE_BOUNDARY } from "../map";
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
    } else if (surroundingTiles.bottomCentre == TILE_BOUNDARY) {
      lemming.action = new Walk()
    } else {
      removeTerrain(gameState.currentLevel.map, new Vec2(lemming.position.x, lemming.position.y + 1))
    }
  }
}
