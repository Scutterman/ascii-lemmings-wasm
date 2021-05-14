import { addLayerToScreen } from "../loop";
import { BaseLevel } from "./baseLevel";
import { Level } from "./level";

export class MetaScreen extends Level {
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
    const map = this.cloneMap()
    addLayerToScreen(true)
    this.render(map, false)
    this.renderControls(false)
  }
}