import { gameState } from "..";
import { Animation } from "../animation";
import { Lemming } from "../lemming";
import { removeTerrain, SurroundingTiles } from "../map";
import { Vec2 } from "../position";
import { LemmingAction } from "./lemmingAction";

// TODO:: Explode action should happen alongside existing action
export class Explode extends LemmingAction {
  private framesBeforeExplode: u8 = 5

  constructor() {
    super(new Animation([[['5']], [['4']], [['3']], [['2']], [['1']], [['0']]]))
  }
  
  update(lemming: Lemming, surroundingTiles: SurroundingTiles): void {
    if (this.framesBeforeExplode > 0) {
      this.framesBeforeExplode--
    } else {
      removeTerrain(gameState.currentLevel.map, new Vec2(lemming.position.x, lemming.position.y + 1))
      lemming.removed = true
    }
  }
  
}