import { gameState } from "..";
import { Animation } from "../animation";
import { Lemming } from "../lemming";
import { addBrick, SurroundingTiles, TILE_AIR } from "../map";
import { Vec2 } from "../position";
import { LemmingAction } from "./lemmingAction";
import { Walk } from "./walk";

export class Builder extends LemmingAction {
  private bricksRemaining: u8 = 12
  private moveOntoBrick: boolean = false
  
  constructor() {
    super(new Animation([[['/']]]))
  }
  
  update(lemming: Lemming, surroundingTiles: SurroundingTiles): void {
    this.updateBuilder(lemming, surroundingTiles)
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
    } else if (this.canBuildTileInOtherDirection(lemming, surroundingTiles)) {
      lemming.movingRight = !lemming.movingRight
      return
    } else {
      lemming.action = new Walk()
    }
    
    if (this.canBuildNextTile(lemming, surroundingTiles)) {
      addBrick(gameState.currentLevel.map, new Vec2(lemming.position.x + xDelta, lemming.position.y))
      this.bricksRemaining--
    } else if (this.canBuildTileInOtherDirection(lemming, surroundingTiles)) {
      lemming.movingRight = !lemming.movingRight
      return
    } else {
      lemming.action = new Walk()
    }
  }

  private canBuildNextTile(lemming: Lemming, surroundingTiles: SurroundingTiles): boolean {
    const tile: string = lemming.movingRight ? surroundingTiles.left : surroundingTiles.right
    return tile == TILE_AIR
  }

  private canBuildTileInOtherDirection(lemming: Lemming, surroundingTiles: SurroundingTiles): boolean {
    const tile: string = lemming.movingRight ? surroundingTiles.right : surroundingTiles.left
    return tile == TILE_AIR
  }

  private canMoveOntoBrickTile(lemming: Lemming, surroundingTiles: SurroundingTiles): boolean {
    const tile: string = lemming.movingRight ? surroundingTiles.topLeft : surroundingTiles.topRight
    return tile == TILE_AIR
  }
}