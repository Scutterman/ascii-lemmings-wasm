import { currentLevel } from "..";
import { Animation } from "../animation";
import { Lemming } from "../lemming";
import { addBrick, getSurroundingTiles, SurroundingTiles, TILE_AIR } from "../map";
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
  
  update(lemming: Lemming, surroundingTiles: SurroundingTiles): void {
    this.updateBuilder(lemming, surroundingTiles)
  }
  
  public label(): string {
    return 'Builder'
  }
  
  private updateBuilder(lemming: Lemming, surroundingTiles: SurroundingTiles, hasTurnedAround: boolean = false): void {
    if (this.isFalling(surroundingTiles)) {
      this.handleFalling(lemming)
      return
    } else if(this.bricksRemaining == 0) {
      lemming.action = new Walk()
      return
    }
    
    const xDelta: i16 = lemming.movingRight ? 1 : -1
    
    if (this.moveOntoBrick == false) {
      this.moveOntoBrick = true
    } else if (this.canMoveOntoBrickTile(lemming, surroundingTiles)) {
      lemming.position.x += xDelta
      lemming.position.y--
      surroundingTiles = getSurroundingTiles(currentLevel.map, lemming.position)
    } else if (this.canBuildTileInOtherDirection(lemming, surroundingTiles)) {
      lemming.movingRight = !lemming.movingRight
      this.moveOntoBrick = false
      return
    } else {
      lemming.action = new Walk()
    }
    
    if (this.canBuildNextTile(lemming, surroundingTiles)) {
      addBrick(currentLevel.map, new Vec2(lemming.position.x + xDelta, lemming.position.y))
      this.bricksRemaining--
    } else if (this.canBuildTileInOtherDirection(lemming, surroundingTiles)) {
      lemming.movingRight = !lemming.movingRight
      this.moveOntoBrick = false
      return
    } else {
      lemming.action = new Walk()
    }
  }

  private canBuildNextTile(lemming: Lemming, surroundingTiles: SurroundingTiles): boolean {
    const tile: string = lemming.movingRight ? surroundingTiles.right : surroundingTiles.left
    return tile == TILE_AIR
  }

  private canBuildTileInOtherDirection(lemming: Lemming, surroundingTiles: SurroundingTiles): boolean {
    const tile: string = lemming.movingRight ? surroundingTiles.left : surroundingTiles.right
    return tile == TILE_AIR
  }

  private canMoveOntoBrickTile(lemming: Lemming, surroundingTiles: SurroundingTiles): boolean {
    const tile: string = lemming.movingRight ? surroundingTiles.topRight : surroundingTiles.topLeft
    return tile == TILE_AIR
  }
}