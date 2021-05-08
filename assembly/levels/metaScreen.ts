import { addLayerToScreen } from "../loop";
import { mapToTiles } from "../map";
import { Level } from "./level";

export class MetaScreen extends Level {
  constructor(tag: string) {
    super(tag, 0, 0, mapToTiles([
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