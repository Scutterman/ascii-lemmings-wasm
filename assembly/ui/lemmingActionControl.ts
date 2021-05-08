import { gameState } from "..";
import { Animation } from "../animation";
import { getRenderedTextArray } from "../loop";
import { Vec2 } from "../position";
import { LemmingGift } from "../types";
import { UIControl } from "./uiControl";

export class LemmingActionControl extends UIControl {
  constructor(
    positionOnScreen: Vec2,
    private gift: LemmingGift,
    private animation: Animation
  ) {
    super(positionOnScreen, '', () => {}, 'GIFT_COUNTER_' + gift.toString())
  }

  /** start overrides */
  public clicked(): void { gameState.setSelectedGift(this.gift) }
  /** end overrides */

  public getTextForRender(isDirty: boolean): string[] {
    if (!this.hasMouseFocus) {
      this.animation.reset()
    }
    
    const labelText = getRenderedTextArray(this.getText())
    const shouldProgressAnimation = isDirty && this.hasMouseFocus
    const animationText = getRenderedTextArray(this.animation.getNextFrame(shouldProgressAnimation)[0][0])
    const maxLabelWidth: i32 = labelText.length > 0 ? labelText[0].length : 0
    const maxAnimationWidth: i32 = animationText.length > 0 ? animationText[0].length : 0
    
    // Ensure both elements are centred in the control
    if (maxAnimationWidth < maxLabelWidth) {
      const padding = ' '.repeat(i32(Math.floor(maxLabelWidth - maxAnimationWidth) / 2))
      for (let row = 0; row < animationText.length; row++) { animationText[row] = padding + animationText[row] + padding }
    } else if (maxLabelWidth < maxAnimationWidth) {
      const padding = ' '.repeat(i32(Math.floor(maxAnimationWidth - maxLabelWidth) / 2))
      for (let row = 0; row < labelText.length; row++) { labelText[row] = padding + labelText[row] + padding }
    }

    for (let row = 0; row < animationText.length; row++) {
      labelText.push(animationText[row])
    }
    return labelText
  }
}
