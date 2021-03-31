import { Vec2 } from "./position";
import { UIAction } from "./types";

export class UIControl {
  constructor(
    private positionOnScreen: Vec2,
    private text: string,
    private action: UIAction
  ) { }

  public getPosition(): Vec2 { return this.positionOnScreen }
  public getText(): string { return '|' + this.text  + '|' }
  public clicked(): void { this.action() }
  
  public isInBounds(x: i32, y: i32): boolean {
    const textLength = this.getText().length
    const pos = this.getPosition()
    const posX = i32(pos.x)
    const posY = i32(pos.y)

    return (x > posX && x < (posX + textLength) && y == posY)
  }
}
