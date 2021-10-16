import { Animation, Direction } from "../animation";
import { animationItems } from "../generatedLevels/animationItems";
import { Lemming } from "../lemming";
import { getTileInDirection, TILE_AIR } from "../map";
import { Vec2 } from "../position";
import { Climb } from "./climb";
import { Fall } from "./fall";

export abstract class LemmingAction {
  protected animation: Animation
  constructor(private animationName: string, facing: Direction) {
    this.animation = animationItems.get(animationName).getAnimation().clone()
    this.turnAround(facing)
  }

  abstract update(lemming: Lemming): void
  public abstract label(): string
  
  protected isFalling(lemmingPosition: Vec2): boolean {
    return getTileInDirection(lemmingPosition, Direction.Down) == TILE_AIR &&
      getTileInDirection(lemmingPosition, Direction.Down | Direction.Left) == TILE_AIR
  }
  
  protected handleFalling(lemming: Lemming, changeAction: boolean = true): void {
    if (changeAction) {
      lemming.action = new Fall(lemming.facingDirection)
    }
    lemming.position = new Vec2(lemming.position.x, lemming.position.y + 1)
  }

  protected handleClimbing(lemming: Lemming): void {
    lemming.action = new Climb(lemming.facingDirection)
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
