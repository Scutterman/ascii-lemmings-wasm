import { Vec2 } from "../position";
import { LevelTiles } from "../types";

export class UILabel {
  constructor(
    protected positionOnScreen: Vec2,
    protected text: string,
    protected tag: string = ''
  ) { }

  public getPosition(): Vec2 { return this.positionOnScreen }
  public getText(): string { return '|' + this.text  + '|' }
  public getTag(): string { return this.tag }
  public updateText(text: string): void { this.text = text }

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
}
