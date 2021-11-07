import { Vec2 } from "../position";
import { UILabel } from "./uiLabel";

export class Textbox extends UILabel {
  constructor(
    position: Vec2,
    text: string,
    tag: string = ''
  ) {
    super(position, text, tag)
    this.canReceiveFocus = true
  }
}
