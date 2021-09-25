import { Vec2 } from "../position";
import { UIAction } from "../types";
import { LabelledButton } from "./labelledButton";

export class LabelledCheckbox extends LabelledButton {
  private isCheckedFlag: boolean = false

  constructor(labelText: string, tag: string, action: UIAction = () => {}) {
    super(new Vec2(-1, -1), labelText, action, tag)
    this.setChecked(this.isCheckedFlag)
  }

  public clicked(): void {
    this.setChecked(!this.isCheckedFlag)
    this.action(this.tag)
  }

  public setChecked(state: boolean): void {
    this.isCheckedFlag = state
    this.setControlText(this.isCheckedFlag ? '<x>' : '< >')
  }

  public isChecked(): boolean {
    return this.isCheckedFlag
  }
}