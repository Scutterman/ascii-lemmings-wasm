import { Vec2 } from "../position";
import { UIAction } from "../types";
import { LabelledTextbox } from "./labelledButton";

export class LabelledCheckbox extends LabelledTextbox {
  private isCheckedFlag: boolean = false

  constructor(labelText: string, tag: string, private onChange: UIAction = () => {}) {
    super(new Vec2(-1, -1), labelText, tag)
    this.setChecked(this.isCheckedFlag)
  }

  public clicked(): void {
    this.setChecked(!this.isCheckedFlag)
    this.onChange(this.tag)
  }

  public setChecked(state: boolean): void {
    this.isCheckedFlag = state
    super.updateText(this.isCheckedFlag ? '<x>' : '< >')
  }

  public isChecked(): boolean {
    return this.isCheckedFlag
  }

  public updateText(_value: string): void { }
}