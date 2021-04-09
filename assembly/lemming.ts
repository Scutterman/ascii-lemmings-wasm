import { gameState } from ".";
import { Basher } from "./actions/basher";
import { Block } from "./actions/block";
import { Builder } from "./actions/builder";
import { Digger } from "./actions/digger";
import { Fall } from "./actions/fall";
import { LemmingAction } from "./actions/lemmingAction";
import { Miner } from "./actions/miner";
import { Walk } from "./actions/walk";
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
    const level = gameState.currentLevel
    if (gift != LemmingGift.Walk && level.canUseSkill(gift) == false) {
      return false
    } else {
      level.skillUsed(gift)
    }
    
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
      case LemmingGift.Block:
          this.action = new Block()
      break
      case LemmingGift.BrickSack:
          this.action = new Builder()
      break
      case LemmingGift.Hammer:
          this.action = new Basher()
      break
      case LemmingGift.Pickaxe:
          this.action = new Miner()
      break
      case LemmingGift.Shovel:
          this.action = new Digger()
      break
      case LemmingGift.Walk:
          this.action = new Walk()
      break
    }
    return false
  }
}
