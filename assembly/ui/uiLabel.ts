import { getRenderedTextArray, renderTextArrayToScreen } from "../loop";
import { Vec2 } from "../position";
import { LevelTileDetail } from "../types";
import { removeItem } from "../vdom/elements";
import { UIControl } from "./uiControl";
import { UIITem } from "./uiItem";

export class UILabel extends UIITem {
  protected hasMouseFocus: boolean = false
  
  constructor(
    position: Vec2,
    protected text: string,
    tag: string = ''
  ) {
    super(position, tag)
  }

  public getPosition(): Vec2 { return this.position.clone() }
  public setPosition(postion: Vec2, requiresRerender: boolean = false): void {
    this.position = postion.clone()
    this.hasChangedState = this.hasChangedState || requiresRerender
  }

  public getText(): string { return this.text }
  
  public updateText(text: string): void {
    this.text = text
    this.hasChangedState = true
  }
  public setFocus(hasFocus: boolean): void {
    this.hasMouseFocus = hasFocus
    this.hasChangedState = true
  }

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
    if (!this.hasChangedState || !this.showing) { return }

    removeItem(this.elementId)
    this.renderUiLabel()
    this.hasChangedState = false
  }

  private renderUiLabel(): void {
    const info = renderTextArrayToScreen(
      this.getTextForRender(false),
      this.getPosition(),
      this instanceof UIControl,
      this.getColour(),
      this.getBackgroundColour()
    )
  
    this.elementId = info.id
    this.setPosition(info.dimensions.position)
    this.setSize(info.dimensions.size)
  }
}
