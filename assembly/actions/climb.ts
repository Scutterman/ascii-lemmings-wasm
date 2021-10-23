import { Animation, Direction } from "../animation";
import { Lemming } from "../lemming";
import { getTileInDirection, TILE_AIR } from "../map";
import { Vec2 } from "../position";
import { LemmingAction } from "./lemmingAction";
import { Walk } from "./walk";

export class ClimberAnimation extends Animation {
  constructor() { super([[['l']], [['c']]]) }
}

export class Climb extends LemmingAction {
  constructor(facing: Direction) {
    super('LEMMING_CLIMB', facing)
  }

  private cannotClimbFurther(lemming: Lemming): boolean {
    const pos = lemming.positionBasedOnFacingDirection
    const wallTile = getTileInDirection(pos, lemming.facingDirection)
    // TODO:: this assumes bounding box size of 2x2
    pos.y--
    const aboveTile = getTileInDirection(pos, Direction.Up)
    return aboveTile != TILE_AIR || wallTile == TILE_AIR
  }
  
  private hasReachedOpening(lemming: Lemming): boolean {
    const targetTile = getTileInDirection(lemming.positionBasedOnFacingDirection, lemming.facingDirection)
    const aboveTargetTile = getTileInDirection(lemming.positionBasedOnFacingDirection, lemming.facingDirection | Direction.Up)
    return targetTile == TILE_AIR && aboveTargetTile == TILE_AIR
  }

  update(lemming: Lemming): void {
    if (this.hasReachedOpening(lemming)) {
      lemming.addDeltaToPosition(lemming.facingDirection == Direction.Right ? 1 : -1, 0)
      lemming.action = new Walk(lemming.facingDirection)
    } else if (this.cannotClimbFurther(lemming)) {
      lemming.turnAround()
      if (this.isFalling(lemming.position)) {
        this.handleFalling(lemming)
      }
    } else {
      lemming.addDeltaToPosition(0, - 1)
    }
  }
  
  public label(): string {
    return 'Climber'
  }
}
