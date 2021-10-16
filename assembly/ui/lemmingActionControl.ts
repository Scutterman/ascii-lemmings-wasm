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
    const controlText = this.controlText
    this.controlText = ''
    
    const render = super.getTextForRender(shouldProgressAnimation)
    this.controlText = controlText
    const text = this.animation.getNextFrameAsText(shouldProgressAnimation)
    for (let i = 0; i < text.length; i++) { render.push(text[i]) }
    return render
  }

  public render(): void {
    this.hasChangedState = this.hasChangedState || this.hasMouseFocus
    super.render()
  }
}
