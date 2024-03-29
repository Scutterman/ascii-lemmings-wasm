import { Vec2 } from "../position";
import { UIAction } from "../types";
import { UILabel } from "./uiLabel";

export class UIControl extends UILabel {
  constructor(
    position: Vec2,
    text: string,
    protected action: UIAction,
    tag: string = ''
  ) {
    super(position, text, tag)
    this.canReceiveFocus = true
  }

  public clicked(): void { this.action(this.tag) }
}
