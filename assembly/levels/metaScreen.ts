import { clearScreen } from "../loop";
import { load } from "../maps/meta/metaScreenMap";
import { Level } from "./level";

export class MetaScreen extends Level {
  private mapRendered: boolean = false
  constructor(tag: string) {
    super(tag, 'meta', 0, 0, load(), true)
  }
  
  public renderLevel(): void {
    clearScreen()
    if (!this.mapRendered) {
      this.render(this.map, false)
      this.mapRendered = true
    }
    this.renderControls(false)
  }

  public mapSwapped(): void {
    this.mapRendered = false
  }
}