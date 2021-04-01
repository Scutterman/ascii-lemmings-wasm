import { gameState } from ".";
import { Fall } from "./actions/fall";
import { LemmingAction } from "./actions/lemmingAction";
import { Animation } from "./animation";
import { removeTerrain, SurroundingTiles } from "./map";
import { Vec2 } from "./position";
import { LemmingGift } from "./types";

export class Lemming {
  movingRight: boolean = true
  removed: boolean = false
  exited: boolean = false
  actionTimeLeft: u16 = 0
  action: LemmingAction = new Fall()
  position: Vec2 = new Vec2(4, 3)
  hasUmbrella: boolean = false
  isClimber: boolean = false
  private isExploding: boolean = false
  private framesUntilExplosion: u16 = 5
  private explosionAnimation: Animation = new Animation([[['5']], [['4']], [['3']], [['2']], [['1']], [['0']]])

  public update(surroundingTiles: SurroundingTiles): void {
    const processUpdate = !this.isExploding || this.updateExplosion()
    if (processUpdate) {
      this.action.update(this, surroundingTiles)
    }
  }

  public triggerExplosion(): void {
    this.isExploding = true
  }

  // returns whether the lemming is still alive (for now)
  private updateExplosion(): boolean {
    if (this.framesUntilExplosion > 0) {
      this.framesUntilExplosion--
      return true
    } else {
      removeTerrain(gameState.currentLevel.map, new Vec2(this.position.x - 1, this.position.y -1))
      removeTerrain(gameState.currentLevel.map, new Vec2(this.position.x - 1, this.position.y))
      removeTerrain(gameState.currentLevel.map, new Vec2(this.position.x - 1, this.position.y + 1))
      removeTerrain(gameState.currentLevel.map, new Vec2(this.position.x, this.position.y - 1))
      removeTerrain(gameState.currentLevel.map, new Vec2(this.position.x, this.position.y + 1))
      removeTerrain(gameState.currentLevel.map, new Vec2(this.position.x + 1, this.position.y - 1))
      removeTerrain(gameState.currentLevel.map, new Vec2(this.position.x + 1, this.position.y))
      removeTerrain(gameState.currentLevel.map, new Vec2(this.position.x + 1, this.position.y + 1))
      this.removed = true
      return false
    }
  }

  public renderFrame(): string {
    if (this.isExploding) {
      return this.explosionAnimation.getNextFrame()[0][0]
    } else {
      return this.action.getNextAnimationFrame()
    }
  }

  public setGift(gift: LemmingGift): boolean {
    switch (gift) {
      case LemmingGift.ClimbingBoots: 
        if (this.isClimber != true) {
          this.isClimber = true
          return true
        }
      break
      case LemmingGift.Umbrella:
        if (this.hasUmbrella != true) {
          this.hasUmbrella = true
          return true
        }
      break
      case LemmingGift.Bomb:
        if (this.isExploding != true) {
          this.isExploding = true
          return true
        }
      break
    }
    return false
  }
}
