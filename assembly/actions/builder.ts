import { currentLevel } from "..";
import { Animation, Direction } from "../animation";
import { Lemming } from "../lemming";
import { addBrick, getTileInDirection, TILE_AIR } from "../map";
import { Vec2 } from "../position";
import { LemmingAction } from "./lemmingAction";
import { Walk } from "./walk";

export class BuilderAnimation extends Animation {
  constructor() { super([[['/']]]) }
}

export class Builder extends LemmingAction {
  private bricksRemaining: u8 = 12
  private moveOntoBrick: boolean = false
  
  constructor() {
    super(new BuilderAnimation())
  }
  
  update(lemming: Lemming): void {
  }
  
  public label(): string {
    return 'Builder'
  }

  private updateBuilder(lemming: Lemming): void {
    if (this.isFalling(lemming.position)) {
      this.handleFalling(lemming)
      return
    } else if(this.bricksRemaining == 0) {
      lemming.action = new Walk()
      return
    }
    
    const xDelta: i16 = lemming.facingDirection == Direction.Right ? 1 : -1
    
    if (this.moveOntoBrick == false) {
      this.moveOntoBrick = true
    } else if (this.canMoveOntoBrickTile(lemming)) {
      lemming.position.x += xDelta
      lemming.position.y--
    } else if (this.canBuildTileInOtherDirection(lemming)) {
      lemming.turnAround()
      this.moveOntoBrick = false
      return
    } else {
      lemming.action = new Walk()
    }
    
    if (this.canBuildNextTile(lemming)) {
      addBrick(currentLevel.map, new Vec2(lemming.position.x + xDelta, lemming.position.y))
      this.bricksRemaining--
    } else if (this.canBuildTileInOtherDirection(lemming)) {
      lemming.turnAround()
      this.moveOntoBrick = false
      return
    } else {
      lemming.action = new Walk()
    }
  }

  private canBuildNextTile(lemming: Lemming): boolean {
    const tile = getTileInDirection(lemming.position, lemming.facingDirection)
    return tile == TILE_AIR
  }

  private canBuildTileInOtherDirection(lemming: Lemming): boolean {
    const tile = getTileInDirection(lemming.position, lemming.facingDirection)
    return tile == TILE_AIR
  }

  private canMoveOntoBrickTile(lemming: Lemming): boolean {
    const tile = getTileInDirection(lemming.position, lemming.facingDirection | Direction.Up)
    return tile == TILE_AIR
  }
}