import { Animation, Direction } from "../animation";
import { Lemming } from "../lemming";
import { getTileInDirection, TILE_AIR } from "../map";
import { Vec2 } from "../position";
import { LemmingActionPatch } from "./lemmingAction";
import { Walk } from "./walk";

export class ClimberAnimation extends Animation {
  constructor() { super([[['l']], [['c']]]) }
}

export class Climb extends LemmingActionPatch {
  constructor() {
    super('LEMMING_CLIMB')
  }

  private cannotClimbFurther(lemming: Lemming): boolean {
    const aboveTile = getTileInDirection(lemming.position, Direction.Up)
    const wallTile = getTileInDirection(lemming.position, lemming.facingDirection)
    return aboveTile != TILE_AIR || wallTile == TILE_AIR
  }
  
  private hasReachedOpening(lemming: Lemming): boolean {
    const targetTile = getTileInDirection(lemming.position, lemming.facingDirection)
    const aboveTargetTile = getTileInDirection(lemming.position, lemming.facingDirection | Direction.Up)
    return targetTile == TILE_AIR && aboveTargetTile == TILE_AIR
  }

  update(lemming: Lemming): void {
    if (this.hasReachedOpening(lemming)) {
      const pos = lemming.position
      pos.x += lemming.facingDirection == Direction.Right ? 1 : -1
      lemming.position = pos
      lemming.action = new Walk()
    } else if (this.cannotClimbFurther(lemming)) {
      lemming.turnAround()
      if (this.isFalling(lemming.position)) {
        this.handleFalling(lemming)
      }
    } else {
      lemming.position = new Vec2(lemming.position.x, lemming.position.y - 1)
    }
  }
  
  public label(): string {
    return 'Climber'
  }
}
