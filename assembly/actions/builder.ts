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
  
  constructor(facing: Direction) {
    super('LEMMING_BUILD', facing)
  }
  
  update(lemming: Lemming): void {
    this.updateBuilder(lemming)
  }
  
  public label(): string {
    return 'Builder'
  }

  private updateBuilder(lemming: Lemming): void {
    if (this.isFalling(lemming.position)) {
      this.handleFalling(lemming)
      return
    } else if(this.bricksRemaining == 0) {
      lemming.action = new Walk(lemming.facingDirection)
      return
    }
    
    const xDelta: i16 = lemming.facingDirection == Direction.Right ? 1 : -1
    
    if (this.moveOntoBrick == false) {
      this.moveOntoBrick = true
    } else if (this.canMoveOntoBrickTile(lemming)) {
      lemming.addDeltaToPosition(xDelta, -1)
    } else if (this.canBuildTileInOtherDirection(lemming)) {
      lemming.turnAround()
      this.moveOntoBrick = false
      return
    } else {
      lemming.action = new Walk(lemming.facingDirection)
    }
    
    if (this.canBuildNextTile(lemming)) {
      const pos = lemming.positionBasedOnFacingDirection
      pos.x += xDelta
      addBrick(currentLevel.map, pos)
      this.bricksRemaining--
    } else if (this.canBuildTileInOtherDirection(lemming)) {
      lemming.turnAround()
      this.moveOntoBrick = false
      return
    } else {
      lemming.action = new Walk(lemming.facingDirection)
    }
  }

  private canBuildNextTile(lemming: Lemming): boolean {
    const tile = getTileInDirection(lemming.positionBasedOnFacingDirection, lemming.facingDirection)
    const tile2 = getTileInDirection(lemming.positionBasedOnFacingDirection, lemming.facingDirection | Direction.Up)
    return tile == TILE_AIR && tile2 == TILE_AIR
  }

  private canBuildTileInOtherDirection(lemming: Lemming): boolean {
    const theOtherDirection = lemming.facingDirection == Direction.Right ? Direction.Left : Direction.Right
    // TODO:: This will be wrong no matter whether we use .position or .positionBasedOnFacingDirection
    // Need to get the opposite side of the bounding box to the facing edge
    const tile = getTileInDirection(lemming.positionBasedOnFacingDirection, theOtherDirection)
    const tile2 = getTileInDirection(lemming.positionBasedOnFacingDirection, theOtherDirection | Direction.Up)
    return tile == TILE_AIR && tile2 == TILE_AIR
  }

  private canMoveOntoBrickTile(lemming: Lemming): boolean {
    const pos = lemming.positionBasedOnFacingDirection
    const tile = getTileInDirection(pos, lemming.facingDirection | Direction.Up)
    pos.y -= 2
    const tile2 = getTileInDirection(pos, lemming.facingDirection)
    return tile == TILE_AIR && tile2 == TILE_AIR
  }
}
