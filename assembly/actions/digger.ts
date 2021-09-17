import { Animation, Direction } from "../animation";
import { Lemming } from "../lemming";
import { getPositionInDirection, getSurroundingTileDetail, removeTerrainFromDirection, terrainIndestructible } from "../map";
import { LemmingAction } from "./lemmingAction";
import { Walk } from "./walk";

export class DiggerAnimation extends Animation {
  constructor() { super([[['D']]]) }
}

export class Digger extends LemmingAction {
  constructor() {
    super(new DiggerAnimation())
  }
  
  update(lemming: Lemming): void {
    if (this.isFalling(lemming.position)) {
      this.handleFalling(lemming)
    } else if (!this.canMineDown(lemming)) {
      lemming.action = new Walk()
    } else {
      removeTerrainFromDirection(lemming.position, Direction.Down)
      lemming.position.y++
    }
  }

  private canMineDown(lemming: Lemming): boolean {
    const pos = getPositionInDirection(lemming.position, Direction.Down)
    const detail = getSurroundingTileDetail(pos)
    return detail != null && terrainIndestructible(detail.animation, Direction.Down) == false
  }
  
  public label(): string {
    return 'Digger'
  }
}
