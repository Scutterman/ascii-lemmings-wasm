import { Vec2 } from "../position";
import { UIAction } from "../types";
import { UILabel } from "./uiLabel";

export class UIControl extends UILabel {
  constructor(
    positionOnScreen: Vec2,
    text: string,
    private action: UIAction,
    tag: string = ''
  ) { super(positionOnScreen, text, tag) }

  public clicked(): void { this.action() }
}
