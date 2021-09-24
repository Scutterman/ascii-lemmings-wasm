import { Vec2 } from "../position";
import { LabelledButton } from "./labelledButton";

export class LabelledCheckbox extends LabelledButton {
  private isCheckedFlag: boolean = false

  constructor(labelText: string, tag?: string) {
    super(new Vec2(-1, -1), labelText, () => {}, tag)
    this.setControlText('< >')
  }

  public clicked(): void {
    this.isCheckedFlag = !this.isCheckedFlag
    this.setControlText(this.isCheckedFlag ? '<x>' : '< >')
  }

  public isChecked(): boolean {
    return this.isCheckedFlag
  }
}