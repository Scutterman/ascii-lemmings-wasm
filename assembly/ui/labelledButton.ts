import { getRenderedTextArray } from "../loop";
import { Vec2 } from "../position";
import { UIAction } from "../types";
import { Textbox } from "./Textbox";
import { UIControl } from "./uiControl";

export const getMultiLineTextForRender = (rows: string[]): string[] => {
  const output: string[] = []
  const textArrays: string[][] = []
  let maxWidth = 0

  for (let i = 0; i < rows.length; i++) {
    const arr = getRenderedTextArray(rows[i])
    textArrays.push(arr)
    if (arr.length > 0 && arr[0].length > maxWidth) {
      maxWidth = arr[0].length;
    }
  }

  for (let i = 0; i < textArrays.length; i++) {
    const width = textArrays[i].length > 0 ? textArrays[i][0].length : 0
    let leftPadding = ''
    let rightPadding = ''

    if (width < maxWidth) {
    const paddingAmount = maxWidth - width
    const leftPaddingAmount = i32(Math.floor(paddingAmount / 2))
    const rightPaddingAmount = paddingAmount - leftPaddingAmount
    leftPadding = ' '.repeat(leftPaddingAmount)
    rightPadding = ' '.repeat(rightPaddingAmount)
    }
    
    for (let row = 0; row < textArrays[i].length; row++) {
      output.push(leftPadding + textArrays[i][row] + rightPadding)
    }
  }

  return output
}

export class LabelledTextbox extends Textbox {
  constructor(
    position: Vec2,
    private labelText: string,
    tag?: string
  ) {
    super(position, '', tag)
  }

  public getTextForRender(_isDirty: boolean): string[] {
    return getMultiLineTextForRender([this.labelText, this.getText()])
  }

  public render(): void {
    this.hasChangedState = this.hasChangedState || this.hasMouseFocus
    super.render()
  }
}

export class EasyLabelledButton extends LabelledTextbox {
  constructor(labelText: string, tag?: string) {
    super(new Vec2(0,0), labelText, tag)
  }
}
