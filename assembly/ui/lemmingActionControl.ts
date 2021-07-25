import { gameState } from "..";
import { Animation } from "../animation";
import { Vec2 } from "../position";
import { LemmingGift } from "../types";
import { LabelledButton } from "./labelledButton";

export class LemmingActionControl extends LabelledButton {
  constructor(
    position: Vec2,
    private gift: LemmingGift,
    private animation: Animation
  ) {
    super(position, '', () => {}, 'GIFT_COUNTER_' + gift.toString())
  }

  /** start overrides */
  public clicked(): void { gameState.setSelectedGift(this.gift) }
  /** end overrides */

  public getTextForRender(isDirty: boolean): string[] {
    if (!this.hasMouseFocus) {
      this.animation.reset()
    }

    const shouldProgressAnimation = isDirty && this.hasMouseFocus
    this.controlText = this.animation.getNextFrame(shouldProgressAnimation)[0][0]
    
    return super.getTextForRender(shouldProgressAnimation)
  }

  public render(): void {
    this.hasChangedState = this.hasChangedState || this.hasMouseFocus
    super.render()
  }
}
