import { Vec2 } from "../position";
import { UIAction } from "../types";
import { UILabel } from "./uiLabel";

export class UIControl extends UILabel {
  constructor(
    positionOnScreen: Vec2,
    text: string,
    private action: UIAction
  ) { super(positionOnScreen, text) }

  public clicked(): void { this.action() }
  
  public isInBounds(x: i32, y: i32): boolean {
    const textLength = this.getText().length
    const pos = this.getPosition()
    const posX = i32(pos.x)
    const posY = i32(pos.y)

    return (x >= posX && x <= (posX + textLength) && y == posY)
  }
}
