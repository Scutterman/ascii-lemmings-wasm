import { getRenderedTextArray } from "../loop";
import { Vec2 } from "../position";
import { UIAction } from "../types";
import { UIControl } from "./uiControl";

export class LabelledButton extends UIControl {
  protected controlText: string = ''

  constructor(
    position: Vec2,
    labelText: string,
    action: UIAction,
    tag?: string
  ) {
    super(position, labelText, action, tag)
  }

  public setControlText(value: string): void {
    this.controlText = value
  }

  public getControlText(): string {
    return this.controlText
  }

  public getTextForRender(isDirty: boolean): string[] {
    const labelText = getRenderedTextArray(this.getText())
    const controlText = getRenderedTextArray(this.controlText)
    const maxLabelWidth: i32 = labelText.length > 0 ? labelText[0].length : 0
    const maxControlTextWidth: i32 = controlText.length > 0 ? controlText[0].length : 0
    
    // Ensure both elements are centred in the control
    if (maxControlTextWidth < maxLabelWidth) {
      const paddingAmount = maxLabelWidth - maxControlTextWidth
      const leftPaddingAmount = i32(Math.floor(paddingAmount / 2))
      const rightPaddingAmount = paddingAmount - leftPaddingAmount

      const leftPadding = ' '.repeat(leftPaddingAmount)
      const rightPadding = ' '.repeat(rightPaddingAmount)
      for (let row = 0; row < controlText.length; row++) {
        controlText[row] = leftPadding + controlText[row] + rightPadding
      }
    } else if (maxLabelWidth < maxControlTextWidth) {
      const paddingAmount = maxControlTextWidth - maxLabelWidth
      const leftPaddingAmount = i32(Math.floor(paddingAmount / 2))
      const rightPaddingAmount = paddingAmount - leftPaddingAmount

      const leftPadding = ' '.repeat(leftPaddingAmount)
      const rightPadding = ' '.repeat(rightPaddingAmount)

      for (let row = 0; row < labelText.length; row++) {
        labelText[row] = leftPadding + labelText[row] + rightPadding
      }
    }

    for (let row = 0; row < controlText.length; row++) {
      labelText.push(controlText[row])
    }
    return labelText
  }

  public render(): void {
    this.hasChangedState = this.hasChangedState || this.hasMouseFocus
    super.render()
  }
}
