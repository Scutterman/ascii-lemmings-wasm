import { Animation, Direction } from "../animation";
import { Lemming } from "../lemming";
import { getTileInDirection, TILE_AIR } from "../map";
import { Vec2 } from "../position";
import { Climb } from "./climb";
import { Fall } from "./fall";

export abstract class LemmingAction {
  private animation: Animation
  
  constructor(animation: Animation) {
    this.animation = animation
  }

  abstract update(lemming: Lemming): void
  public abstract label(): string
  
  protected isFalling(lemmingPosition: Vec2): boolean {
    return getTileInDirection(lemmingPosition, Direction.Down) == TILE_AIR
  }
  
  protected handleFalling(lemming: Lemming, changeAction: boolean = true): void {
    if (changeAction) {
      lemming.action = new Fall()
    }
    lemming.position.y++
  }

  protected handleClimbing(lemming: Lemming): void {
    lemming.action = new Climb()
  }

  public getNextAnimationFrame(progressFrame: boolean): string {
    const frame = this.animation.getNextFrame(progressFrame)
    return frame[0][0]
  }
}