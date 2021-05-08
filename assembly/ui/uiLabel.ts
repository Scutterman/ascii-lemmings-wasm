import { renderUiLabel } from "../loop";
import { Vec2 } from "../position";
import { LevelTiles } from "../types";

export class UILabel {
  private hasMouseFocus: boolean = false
  constructor(
    protected positionOnScreen: Vec2,
    protected text: string,
    protected tag: string = ''
  ) { }

  public getPosition(): Vec2 { return this.positionOnScreen }
  public setPosition(postion: Vec2): void { this.positionOnScreen = postion }
  public getText(): string { return this.text }
  public getTag(): string { return this.tag }
  public updateText(text: string): void { this.text = text }
  public setFocus(hasFocus: boolean): void { this.hasMouseFocus = hasFocus }

  public isInBounds(x: i32, y: i32): boolean {
    const textLength = this.getText().length
    const pos = this.getPosition()
    const posX = i32(pos.x)
    const posY = i32(pos.y)
    return x >= posX && x <= (posX + textLength) && y == posY
  }
  
  public isVisible(map: LevelTiles): boolean {
    const position = this.getPosition()
    
    if (position.y != -1 && (position.y < 0 || position.y >= map.length)) {
      return false
    }

    if (position.x != -1 && (position.x < 0 || position.x >= map[position.y].length)) {
      return false
    }

    return true
  }

  public render(map: LevelTiles, _isDirty: boolean): void {
    if (!this.isVisible(map)) { return }
    renderUiLabel(this)
  }
}
