import { Animation } from "../animation";
import { Lemming } from "../lemming";
import { SurroundingTiles, TILE_AIR } from "../map";
import { Fall } from "./fall";

export abstract class LemmingAction {
  private animation: Animation
  
  constructor(animation: Animation) {
    this.animation = animation
  }

  abstract update(lemming: Lemming, surroundingTiles: SurroundingTiles): void
  public abstract label(): string
  
  protected isFalling(surroundingTiles: SurroundingTiles): boolean {
    return surroundingTiles.bottomCentre == TILE_AIR
  }
  
  protected handleFalling(lemming: Lemming, changeAction: boolean = true): void {
    if (changeAction) {
      lemming.action = new Fall()
    }
    lemming.position.y++
  }

  public getNextAnimationFrame(): string {
    const frame = this.animation.getNextFrame()
    return frame[0][0]
  }
}