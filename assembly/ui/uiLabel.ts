import { renderUiLabel, getRenderedTextArray } from "../loop";
import { Vec2 } from "../position";
import { LevelTileDetail } from "../types";
import { UIITem } from "./uiItem";

export class UILabel extends UIITem {
  public elementId: string = ''
  protected hasMouseFocus: boolean = false
  private size: Vec2 = new Vec2(0,0)
  constructor(
    position: Vec2,
    protected text: string,
    protected tag: string = ''
  ) {
    super(position)
  }

  public getPosition(): Vec2 { return this.position.clone() }
  public setPosition(postion: Vec2): void { this.position = postion.clone() }
  public getSize(): Vec2 { return this.size.clone() }
  public setSize(size: Vec2): void { this.size = size.clone() }
  public getText(): string { return this.text }
  public getTag(): string { return this.tag }
  public updateText(text: string): void { this.text = text }
  public setFocus(hasFocus: boolean): void { this.hasMouseFocus = hasFocus }

  public isInBounds(x: i32, y: i32): boolean {
    const pos = this.getPosition()
    const size = this.getSize()
    const posX = i32(pos.x)
    const posY = i32(pos.y)
    return x >= posX && x <= (posX + size.x) && y >= posY && y <= (posY + size.y)
  }
  
  public isVisible(map: LevelTileDetail): boolean {
    const position = this.getPosition()
    
    if (position.y != -1 && (position.y < 0 || position.y >= map.length)) {
      return false
    }

    if (position.x != -1 && (position.x < 0 || position.x >= map[position.y].length)) {
      return false
    }

    return true
  }

  public getTextForRender(_isDirty: boolean): string[] {
    return getRenderedTextArray(this.getText())
  }

  public render(): void {
    renderUiLabel(this)
  }
}
