import { log } from "..";
import { Animation, Direction } from "../animation";
import { Lemming } from "../lemming";
import { getTileInDirection, TILE_AIR } from "../map";
import { LemmingAction } from "./lemmingAction";
import { Walk } from "./walk";

export class ClimberAnimation extends Animation {
  constructor() { super([[['l']], [['c']]]) }
}

export class Climb extends LemmingAction {
  constructor() {
    super(new ClimberAnimation())
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
      lemming.position.x += lemming.facingDirection == Direction.Right ? 1 : -1
      lemming.action = new Walk()
    } else if (this.cannotClimbFurther(lemming)) {
      lemming.turnAround()
      if (this.isFalling(lemming.position)) {
        this.handleFalling(lemming)
      }
    } else {
      lemming.position.y--
    }
  }
  
  public label(): string {
    return 'Climber'
  }
}
