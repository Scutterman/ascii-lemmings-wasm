import { Animation, Direction } from "../animation";
import { animationItems } from "../generatedLevels/animationItems";
import { Lemming } from "../lemming";
import { getRenderedTextArray } from "../loop";
import { getTileInDirection, TILE_AIR } from "../map";
import { Vec2 } from "../position";
import { Climb } from "./climb";
import { Fall } from "./fall";

export abstract class LemmingAction {
  protected animation: Animation
  
  constructor(animation: Animation) {
    this.animation = animation
  }

  abstract update(lemming: Lemming): void
  public abstract label(): string
  
  protected isFalling(lemmingPosition: Vec2): boolean {
    return getTileInDirection(lemmingPosition, Direction.Down) == TILE_AIR &&
      getTileInDirection(lemmingPosition, Direction.Down | Direction.Left) == TILE_AIR
  }
  
  protected handleFalling(lemming: Lemming, changeAction: boolean = true): void {
    if (changeAction) {
      lemming.action = new Fall()
    }
    lemming.position = new Vec2(lemming.position.x, lemming.position.y + 1)
  }

  protected handleClimbing(lemming: Lemming): void {
    lemming.action = new Climb()
  }

  public turnAround(newDirection: Direction): void { }

  public getNextAnimationFrame(progressFrame: boolean): string[] {
    const frame = this.animation.getNextFrame(progressFrame)
    return getRenderedTextArray(frame[0][0])
  }

  public getPositionOffset(): i16 {
    return 0
  }
}

export abstract class LemmingActionPatch extends LemmingAction {
  constructor(private animationName: string) {
    super(animationItems.get(animationName).getAnimation().clone())
  }

  
  public turnAround(newDirection: Direction): void {
    const newAnimationName = newDirection == Direction.Right ? this.animationName : this.animationName + '_FLIPPED'
    this.animation = animationItems.get(newAnimationName).getAnimation().clone()
  }

  public getNextAnimationFrame(progressFrame: boolean): string[] {
    return this.animation.getNextFrameAsText(progressFrame)
  }

  public getPositionOffset(): i16 {
    return 1
  }
}
