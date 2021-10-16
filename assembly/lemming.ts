import { currentLevel, lemmings } from ".";
import { Basher } from "./actions/basher";
import { Block } from "./actions/block";
import { Builder } from "./actions/builder";
import { Digger } from "./actions/digger";
import { Fall } from "./actions/fall";
import { LemmingAction } from "./actions/lemmingAction";
import { Miner } from "./actions/miner";
import { Walk } from "./actions/walk";
import { Animation, Direction } from "./animation";
import { getRenderedTextArray } from "./loop";
import { removeTerrainFromDirection } from "./map";
import { Vec2 } from "./position";
import { LemmingGift } from "./types";
import { removeItem } from "./vdom/elements";

export class BomberAnimation extends Animation {
  constructor() { super([[['5']], [['4']], [['3']], [['2']], [['1']], [['0']]]) }
}

export class Lemming {
  public elementId: string = ''

  facingDirection: Direction = Direction.Right
  removed: boolean = false
  exited: boolean = false
  actionTimeLeft: u16 = 0
  action: LemmingAction = new Fall(Direction.Right)
  _position: Vec2 = new Vec2(22, 13)
  size: Vec2 = new Vec2(0,0)
  hasUmbrella: boolean = false
  isClimber: boolean = false
  private isExploding: boolean = false
  private framesUntilExplosion: u16 = 5
  private explosionAnimation: Animation = new BomberAnimation()

  get position(): Vec2 {
    // TODO:: When lemmings are 2x2 blocks,
    // modify the x position returned here
    // to always represent the forward edge
    // based on what direction it's facing
    const pos = this._position.clone()
    return pos
  }

  set position(newPosition: Vec2) {
    // TODO:: When lemmings are 2x2 blocks,
    // modify the x position set here
    // to account for the fact that it may be one off
    // based on what direction it's facing
    this._position = newPosition
  }

  public update(): void {
    const processUpdate = !this.isExploding || this.updateExplosion()
    if (processUpdate) {
      this.action.update(this)
    }
  }

  public triggerExplosion(): void {
    this.isExploding = true
  }

  public areYouExploding(): boolean {
    return this.isExploding
  }

  public removeFromGame(): void {
    this.removed = true
    removeItem(this.elementId)
  }

  // returns whether the lemming is still alive (for now)
  private updateExplosion(): boolean {
    if (this.framesUntilExplosion > 0) {
      this.framesUntilExplosion--
      return true
    } else {
      removeTerrainFromDirection(this.position, Direction.Up)
      removeTerrainFromDirection(this.position, Direction.Down)
      removeTerrainFromDirection(this.position, Direction.Left)
      removeTerrainFromDirection(this.position, Direction.Right)
      removeTerrainFromDirection(this.position, Direction.Up | Direction.Left)
      removeTerrainFromDirection(this.position, Direction.Up | Direction.Right)
      removeTerrainFromDirection(this.position, Direction.Down | Direction.Left)
      removeTerrainFromDirection(this.position, Direction.Down | Direction.Right)
      this.removeFromGame()
      return false
    }
  }

  public renderFrame(isDirty: boolean): string[] {
    if (this.isExploding) {
      return getRenderedTextArray(this.explosionAnimation.getNextFrame(isDirty)[0][0])
    } else {
      return this.action.getNextAnimationFrame(isDirty)
    }
  }
  public setGift(gift: LemmingGift): boolean {
    const level = currentLevel
    if (this.action instanceof Block && gift != LemmingGift.Bomb) {
      return false
    }
    else if (gift != LemmingGift.Walk && level.canUseSkill(gift) == false) {
      return false
    } else {
      level.skillUsed(gift)
    }
    
    switch (gift) {
      case LemmingGift.None:
        return true
      case LemmingGift.ClimbingBoots: 
        if (this.isClimber == true) {
          return false
        }

        this.isClimber = true
      break
      case LemmingGift.Umbrella:
        if (this.hasUmbrella == true) {
          return false
        }
        this.hasUmbrella = true
      break
      case LemmingGift.Bomb:
        if (this.isExploding == true) {
          return false
        }
        this.isExploding = true
      break
      case LemmingGift.Block:
          this.action = new Block(this.facingDirection)
      break
      case LemmingGift.BrickSack:
          this.action = new Builder(this.facingDirection)
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
          this.action = new Walk(this.facingDirection)
      break
      default:
        return false
    }
    return true
  }

  public turnAround(): void {
    this.facingDirection = this.facingDirection == Direction.Right ? Direction.Left : Direction.Right
    this.action.turnAround(this.facingDirection)
  }
}

export function isBlockerInLocation(location: Vec2): boolean {
  for (let i = 0; i < lemmings.length; i++) {
    if (lemmings[i].position.equals(location) && lemmings[i].action instanceof Block) {
      return true
    }
  }

  return false
}
