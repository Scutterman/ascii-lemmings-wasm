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
    
    // Step 1: Get label text
    const labelText = getRenderedTextArray(this.getText())
    // Step 2: Get animation frame
    const shouldProgressAnimation = isDirty && this.hasMouseFocus
    const animationText = getRenderedTextArray(this.animation.getNextFrame(shouldProgressAnimation)[0][0])
    // Step 3: Compose item so it is stacked vertically with label on top and animation frame below
    for (let row = 0; row < animationText.length; row++) {
      labelText.push(animationText[row])
    }
    // Step 4: Render as relative element
    return labelText
  }
}
