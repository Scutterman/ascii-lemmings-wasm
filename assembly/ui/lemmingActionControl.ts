import { gameState } from "..";
import { Animation } from "../animation";
import { Vec2 } from "../position";
import { LemmingGift } from "../types";
import { UIControl } from "./uiControl";

export class LemmingActionControl extends UIControl {
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
    const render = super.getTextForRender(shouldProgressAnimation)
    const text = this.animation.getNextFrameAsText(shouldProgressAnimation)
    for (let i = 0; i < text.length; i++) { render.push(text[i]) }
    return render
  }

  public render(): void {
    this.hasChangedState = this.hasChangedState || this.hasMouseFocus
    super.render()
  }
}
