import { Animation, Direction } from "../animation";
import { Lemming } from "../lemming";
import { getPositionInDirection, getSurroundingTileDetail, removeTerrain, terrainIndestructible } from "../map";
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
    } else if (this.canMineNextTile(lemming)) {
      const xDelta: i16 = lemming.facingDirection == Direction.Right ? 1 : -1
      removeTerrain(new Vec2(lemming.position.x + xDelta, lemming.position.y), lemming.facingDirection)
      lemming.position.x += xDelta
    } else {
      lemming.action = new Walk()
    }
  }

  public label(): string {
    return 'Basher'
  }

  private canMineNextTile(lemming: Lemming): boolean {
    const pos = getPositionInDirection(lemming.position, lemming.facingDirection)
    const detail = getSurroundingTileDetail(pos)
    return detail != null && terrainIndestructible(detail.animation, lemming.facingDirection) == false
  }
}
