import { clearScreen } from "../loop";
import { BaseLevel } from "./baseLevel";
import { Level } from "./level";

export class MetaScreen extends Level {
  private mapRendered: boolean = false
  constructor(tag: string) {
    super(tag, 0, 0, BaseLevel.mapToTileDetail([
      '__________________________________________________________________________',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '|                                                                        |',
      '__________________________________________________________________________',
    ]), true)
  }
  
  public renderLevel(): void {
    clearScreen()
    if (!this.mapRendered) {
      this.render(this.map, false)
      this.mapRendered = true
    }
    this.renderControls(false)
  }
}