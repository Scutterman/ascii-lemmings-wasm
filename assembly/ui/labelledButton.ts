import { getRenderedTextArray } from "../loop";
import { Vec2 } from "../position";
import { UIAction } from "../types";
import { UIControl } from "./uiControl";

export class LabelledButton extends UIControl {
  protected controlText: string[] = []
  
  constructor(
    position: Vec2,
    labelText: string,
    action: UIAction,
    tag?: string
  ) {
    super(position, labelText, action, tag)
  }

  public getTextForRender(isDirty: boolean): string[] {
    const labelText = getRenderedTextArray(this.getText())
    const maxLabelWidth: i32 = labelText.length > 0 ? labelText[0].length : 0
    const maxControlTextWidth: i32 = this.controlText.length > 0 ? this.controlText[0].length : 0
    
    // Ensure both elements are centred in the control
    if (maxControlTextWidth < maxLabelWidth) {
      const padding = ' '.repeat(i32(Math.floor(maxLabelWidth - maxControlTextWidth) / 2))
      for (let row = 0; row < this.controlText.length; row++) { this.controlText[row] = padding + this.controlText[row] + padding }
    } else if (maxLabelWidth < maxControlTextWidth) {
      const padding = ' '.repeat(i32(Math.floor(maxControlTextWidth - maxLabelWidth) / 2))
      for (let row = 0; row < labelText.length; row++) { labelText[row] = padding + labelText[row] + padding }
    }

    for (let row = 0; row < this.controlText.length; row++) {
      labelText.push(this.controlText[row])
    }
    return labelText
  }

  public render(): void {
    this.hasChangedState = this.hasChangedState || this.hasMouseFocus
    super.render()
  }
}
